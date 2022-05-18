const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

const options_lol = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer NMLuwpEwCMPiVQn95oPQVHJkB833N5at9FI6q1E_mAdmdcY6vIo'
  }
};

fetch('https://api.pandascore.co/valorant/matches/past?filter[id]='+id, options_lol)
  .then(function(response){
      return response.json();
  })
  .then(function(posts){
      html = `
          <div class="d-flex">
            <div class="p-2" style="font-weight: bold;">${posts[0].serie.full_name}</div>
            <div class="ms-auto p-2">${posts[0].original_scheduled_at}</div>
          </div>
          <div class="d-flex mb-5" style="margin-top: -15px;">
            <div class="p-2">${posts[0].tournament.name}</div>
          </div>
          <div id="img-matches" class="row mb-5" style="margin-top: 12px;">      
            <div class="text-center col-md-4">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${posts[0].opponents[0].opponent.image_url}" class="img-fluid" style="margin-top: 3px;"/>
              </div>
              <p>${posts[0].opponents[0].opponent.name}</p>
            </div>
        
            <div class="col-md-4 d-flex align-items-center">                      
              <h4 style="margin-left: auto; margin-right:auto;">
                <div class="mb-2" style="font-size: 15px; font-weight: lighter; text-align: center;">
                  FINAL
                </div>
                <div class="mb-2 badge bg-dark text-wrap">
                  ${posts[0].results[0].score} : ${posts[0].results[1].score}
                </div>
                <div style="font-size: 15px; font-weight: lighter; text-align: center;">
                  BO${posts[0].number_of_games}
                </div>
              </h4>
            </div>

            <div class="text-center col-md-4">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${posts[0].opponents[1].opponent.image_url}" class="img-fluid" style="margin-top: 3px;"/>
              </div>
              <p>${posts[0].opponents[1].opponent.name}</p>
              </div>
            </div>
          </div>`
    //   var html = htmls.join('');
      document.getElementById('detailMatches').innerHTML = html; 
  })
  .then(response => console.log(response))
  .catch(err => console.error(err));
