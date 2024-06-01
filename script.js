

//wait the DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dark-mode-toggle').addEventListener('change', function () {
        if (this.checked) {
            document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
            document.body.style.color = 'hsl(230, 17%, 14%)';
            document.querySelectorAll('.card, .overview-card').forEach(card => {
                card.style.backgroundColor = 'hsl(227, 47%, 96%)';
                card.style.color = 'hsl(230, 17%, 14%)';
            });
        } else {
            document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
            document.body.style.color = 'hsl(0, 0%, 100%)';
            document.querySelectorAll('.card, .overview-card').forEach(card => {
                card.style.backgroundColor = 'hsl(228, 28%, 20%)';
                card.style.color = 'hsl(0, 0%, 100%)';
            });
        }

    });

    //fetch data from the  facebook graph api
    const FACEBOOK_ACCESS_TOKEN = 'EAAFF5IuXFJABOwRWBH4ozovkeLGIZB1yZCaFF1ytseJPt7wUPnE7fQYRR2FlTYAsmaeexvsZBQYEZAB9nzEuVSjHg9DkO0Bq1TvDHa42QngGL3F849l8oV13atSZBLwNDdolni4mFOc2a4hcu28CTcawZAUShBJDHRTTlNs5PzzV8VpPr3GVIrvggwE94geliCh5VrzdL2wPrZC5NwpxiEowUZCGnnv1Rp6yugF0m4sFcBPLJBbZAClbEm2wFIc0aiH5cPAZDZD';
    const TWITTER_BEARER_TOKEN = 'your_twitter_bearer_token';

    async function fetchFacebookData() {
        try {
            const response = await fetch(`https://graph.facebook.com/v12.0/me?access_token=${FACEBOOK_ACCESS_TOKEN}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching Facebook data:', error);
        }
    }

    fetchFacebookData();


});
