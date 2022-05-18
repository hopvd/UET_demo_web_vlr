const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  };
  
  fetch('http://localhost:3001/stats/NA/10', options)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){    
        var html = `<div class="col-md">
          <div class="d-flex flex-row justify-content-center">
            <table class="table table-borderless text-center" style="max-width: 400px;">
              <thead>
                <tr>
                  <th scope="col">Team 1</th>
                  <th scope="col"></th>
                  <th scope="col">ACS</th>
                  <th scope="col">K</th>
                  <th scope="col">D</th>
                  <th scope="col">A</th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <th scope="row" class="text-start">${posts.data.segments[0].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/sova.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[0].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[0].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[0].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[0].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[1].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/raze.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[1].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[1].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[1].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
            ${posts.data.segments[1].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[2].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/chamber.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[2].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[2].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[2].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
            ${posts.data.segments[2].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[3].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/skye.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[3].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[3].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[3].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[3].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[4].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/brimstone.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[4].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[4].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[4].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[4].assists_per_round}
              </div></td>
            </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md">
          <div class=" d-flex flex-row justify-content-center">
            <table class="table table-borderless text-center" style="max-width: 400px;">
              <thead>
                <tr>
                  <th scope="col">Team 2</th>
                  <th scope="col"></th>
                  <th scope="col">ACS</th>
                  <th scope="col">K</th>
                  <th scope="col">D</th>
                  <th scope="col">A</th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <th scope="row" class="text-start">${posts.data.segments[5].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/sova.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[5].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[5].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[5].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[5].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[1].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/raze.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[6].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[6].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[6].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[6].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[7].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/chamber.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[7].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[7].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[7].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
            ${posts.data.segments[7].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[8].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/skye.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[8].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[8].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[8].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[8].assists_per_round}
              </div></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">${posts.data.segments[9].player}</th>
              <td><img class="align-items-center" src="https://www.vlr.gg/img/vlr/game/agents/brimstone.png" alt="" style="max-height:30px"></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[9].average_combat_score}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[9].kills_per_round}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[9].kill_deaths}
              </div></td>
              <td><div class="badge text-wrap" style="background-color: #d4d9df; font-size: 13px">
                ${posts.data.segments[9].assists_per_round}
              </div></td>
            </tr>
              </tbody>
            </table>
          </div>
        </div>`
        document.getElementById('detailPlayer').innerHTML = html; 
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));