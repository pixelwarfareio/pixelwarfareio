// https://pixelwarfare.org/wp-content/plugins/includes/js/yasr-front.js?ver=2.3.2
/*** Constant used by yasr

yasrCommonData (postid, ajaxurl, loggedUser, visitorStatsEnabled, loaderHtml, tooltipValues')

yasrMultiSetData (setType, nonce)


***/


/****** Do this actions on document load ******/
document.addEventListener('DOMContentLoaded', function(event) {

    //At pageload, check if there is some shortcode with class yasr-rater-stars
    var yasrRaterInDom = document.getElementsByClassName('yasr-rater-stars');
    //If so, call the function to set the rating
    if (yasrRaterInDom.length > 0) {

        //load this on everypageload
        yasrSetRatingOnLoad(yasrRaterInDom);

    }

    //check if shortcode yasr_visitor_votes is used
    var yasrRaterVVInDom = document.getElementsByClassName('yasr-rater-stars-visitor-votes');

    if (yasrRaterVVInDom.length > 0) {
        yasrVisitorVotesFront(yasrRaterVVInDom);
    }

    var yasrMultiSetVisitorInDom = document.getElementsByClassName('yasr-multiset-visitors-rater');

    if (yasrMultiSetVisitorInDom.length > 0) {
        yasrRaterVisitorsMultiSet(yasrMultiSetVisitorInDom)
    }


    //Check to draw tooltips
    if (yasrRaterVVInDom) {
        if (yasrCommonData.visitorStatsEnabled === 'yes') {
            var yasrStatsInDom = document.getElementsByClassName('yasr-dashicons-visitor-stats');
            if (yasrStatsInDom) {
                yasrDrawTipsProgress (yasrStatsInDom);
            }
        }
    }

    if (typeof yasrMostHighestRanking !== 'undefined') {

        //By default, hide the highest rated chart
        document.getElementById('yasr-highest-rated-posts').style.display = 'none';

    }

});


//This work on top10 ranking chart, show the highest rated and hide most rated
function yasrShowHighest () {

    document.getElementById('yasr-most-rated-posts').style.display = 'none';
    document.getElementById('yasr-highest-rated-posts').style.display = '';

}

//Vice versa
function yasrShowMost () {

    document.getElementById('yasr-highest-rated-posts').style.display = 'none';
    document.getElementById('yasr-most-rated-posts').style.display = '';

}


/****** End Yasr shortcode page  ******/


/****** Tooltip function ******/

//used in shortcode page and ajax page
function yasrDrawTipsProgress (yasrStatsInDom) {

    //htmlcheckid declared false
    var htmlIdChecked = false;

    for (var i = 0; i < yasrStatsInDom.length; i++) {

        (function (i) {

            var htmlId = '#'+yasrStatsInDom.item(i).id;
            var postId = yasrStatsInDom.item(i).getAttribute('data-postid');

            var data = {
                action: 'yasr_stats_visitors_votes',
                post_id: postId
            };

            //Convert in a string
            //var dataToSend = jsObject_to_URLEncoded(data);

            var initialContent = '<span style="color: #0a0a0a">Loading...</span>';

            tippy(htmlId, {
                content: initialContent,
                theme: 'yasr',
                arrow: 'true',
                arrowType: 'round',

                //When support for IE will be dropped out, this will become onShow(tip)
                onShow: function onShow(tip) {

                    if (htmlId !== htmlIdChecked) {
                        jQuery.post(yasrCommonData.ajaxurl, data, function (response) {
                            response = JSON.parse(response);
                            tip.setContent(response);

                        });
                    }
                },
                onHidden: function onHidden() {
                    htmlIdChecked = htmlId;
                }

            });

         })(i);

    }

}



/****** End tooltipfunction ******/


/****  ****/

//this is the function that print the overall rating shortcode, get overall rating and starsize
function yasrSetRaterValue (starSize, htmlId) {

    //convert to be a number
    starSize = parseInt(starSize);

    raterJs({
        starSize: starSize,
        step: 0.1,
        showToolTip: false,
        readOnly: true,
        element: document.getElementById(htmlId),
    });

}

function yasrSetRatingOnLoad (yasrRatingsInDom) {

    //Check in the object
    for (var i = 0; i < yasrRatingsInDom.length; i++) {

        var htmlId = yasrRatingsInDom.item(i).id;
        var starSize = yasrRatingsInDom.item(i).getAttribute('data-rater-starsize');

        yasrSetRaterValue(starSize, htmlId);

    }

}

function yasrVisitorVotesFront (yasrRaterVVInDom) {

    //Check in the object
    for (var i = 0; i < yasrRaterVVInDom.length; i++) {

        (function(i) {

            let rating = yasrRaterVVInDom.item(i).getAttribute('data-rating');
            let readonly = yasrRaterVVInDom.item(i).getAttribute('data-rater-readonly');

            let postId = yasrRaterVVInDom.item(i).getAttribute('data-rater-postid');
            let htmlId = yasrRaterVVInDom.item(i).id;
            let uniqueId = htmlId.replace('yasr-visitor-votes-rater-', '');
            let starSize = parseInt(yasrRaterVVInDom.item(i).getAttribute('data-rater-starsize'));
            let nonce = yasrRaterVVInDom.item(i).getAttribute('data-rater-nonce');
            let isSingular = yasrRaterVVInDom.item(i).getAttribute('data-issingular');

            let containerVotesNumber   = 'yasr-vv-votes-number-container-' + uniqueId;
            let containerAverageNumber = 'yasr-vv-average-container-' + uniqueId;
            let containerAfterStarsID  = 'yasr-visitor-votes-container-after-stars-' + uniqueId;
            let spanBottom = false;

            //this means that attribute data-rating is not set
            if (rating === null && readonly === null) {

                let urlVisitorVotes = 'wp/v2/posts/' + postId + '?_fields=yasr_visitor_votes&_wpnonce='+yasrCommonData.nonce;

                fetch(yasrCommonData.restEndpoint + urlVisitorVotes).then(response => {
                    return response.json();
                }).then(data => {
                    // Work with JSON data here

                    readonly = data.yasr_visitor_votes.stars_attributes.read_only;

                    if (data.yasr_visitor_votes.number_of_votes > 0) {
                        rating = data.yasr_visitor_votes.sum_votes / data.yasr_visitor_votes.number_of_votes;
                    } else {
                        rating = 0;
                    }
                    rating   = rating.toFixed(1);
                    rating   = parseFloat(rating);

                    document.getElementById(containerVotesNumber).innerHTML = data.yasr_visitor_votes.number_of_votes;
                    document.getElementById(containerAverageNumber).innerHTML = rating;

                    yasrSetVisitorVotesRater(starSize, rating, postId, readonly, htmlId, uniqueId, nonce, isSingular, containerAfterStarsID);

                    //insert span with text after the average
                    if(data.yasr_visitor_votes.stars_attributes.span_bottom !== false) {
                        spanBottom = data.yasr_visitor_votes.stars_attributes.span_bottom;
                        let yasrTotalAverageContainer = document.getElementById(containerAfterStarsID);
                        yasrTotalAverageContainer.insertAdjacentHTML('beforeend', spanBottom);
                    }

                }).catch(err => {
                    // Do something for an error here
                });
            } else {
                yasrSetVisitorVotesRater(starSize, rating, postId, readonly, htmlId, uniqueId, nonce, isSingular, containerAfterStarsID);
            }

        })(i);

    }//End for

}

function yasrSetVisitorVotesRater (starSize, rating, postId, readonly, htmlId, uniqueId, nonce, isSingular, containerAfterStarsID) {

    //Be sure is a number and not a string
    rating = parseFloat(rating);

    //raterjs accept only boolean for readOnly element
    readonly = yasrTrueFalseStringConvertion(readonly);

    raterJs({
        starSize: starSize,
        rating: rating,
        step: 1,
        showToolTip: false,
        readOnly: readonly,
        element: document.getElementById(htmlId),

        rateCallback: function rateCallback(rating, done) {
            //show the loader
            document.getElementById(containerAfterStarsID).innerHTML = yasrCommonData.loaderHtml;

            //Creating an object with data to send
            var data = {
                action: 'yasr_send_visitor_rating',
                rating: rating,
                post_id: postId,
                nonce_visitor: nonce,
                is_singular : isSingular
            };

            this.setRating(rating);
            this.disable();

            //Send value to the Server
            jQuery.post(yasrCommonData.ajaxurl, data, function (response) {
                //decode json
                response = JSON.parse(response);
                document.getElementById(containerAfterStarsID).innerHTML = response;
            });
            done();
        }
    });

}

function yasrRaterVisitorsMultiSet (yasrMultiSetVisitorInDom) {

    //will have field id and vote
    var ratingObject = "";

    //an array with all the ratings objects
    var ratingArray = [];

    //Check in the object
    for (var i = 0; i < yasrMultiSetVisitorInDom.length; i++) {

        (function (i) {

            var htmlId = yasrMultiSetVisitorInDom.item(i).id;
            var readonly = yasrMultiSetVisitorInDom.item(i).getAttribute('data-rater-readonly');

            readonly = yasrTrueFalseStringConvertion(readonly);

            var elem = document.querySelector("#" + htmlId);
            raterJs({
                starSize: 16,
                step: 1,
                showToolTip: false,
                readOnly: readonly,
                element: elem,

                rateCallback: function rateCallback(rating, done) {

                    var postId = elem.getAttribute('data-rater-postid');
                    var setId = elem.getAttribute('data-rater-setid');
                    var setIdField = elem.getAttribute('data-rater-set-field-id');

                    //Just leave 1 number after the .
                    rating = rating.toFixed(1);
                    //Be sure is a number and not a string
                    var vote = parseInt(rating);

                    this.setRating(vote); //set the new rating

                    ratingObject = {
                        postid: postId,
                        setid: setId,
                        field: setIdField,
                        rating: vote
                    };

                    //creating rating array
                    ratingArray.push(ratingObject);

                    done();

                }

            });

        })(i);

    }

    jQuery('.yasr-send-visitor-multiset').on('click', function() {

        var multiSetPostId = this.getAttribute('data-postid');
        var multiSetId = this.getAttribute('data-setid');

        jQuery('#yasr-send-visitor-multiset-'+multiSetPostId+'-'+multiSetId).hide();
        jQuery('#yasr-loader-multiset-visitor-'+multiSetPostId+'-'+multiSetId).show();

        var data = {
            action: 'yasr_visitor_multiset_field_vote',
            nonce: yasrMultiSetData.nonceVisitor,
            post_id: multiSetPostId,
            rating: ratingArray,
            set_type: multiSetId
        };

        //Send value to the Server
        jQuery.post(yasrCommonData.ajaxurl, data, function(response) {
            jQuery('#yasr-loader-multiset-visitor-'+multiSetPostId+'-'+multiSetId).text(response);
        });

    });
    
} //End function


function yasrTrueFalseStringConvertion(string) {

    if (typeof string === 'undefined' || string === null || string === '') {
        string = true;
    }

    //Convert string to boolean
    if (string === 'true' || string === '1') {
        string = true;
    }
    if (string === 'false' || string === '0') {
        string = false;
    }

    return string;

}