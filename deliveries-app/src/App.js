import React, { Component } from 'react';
import Card from './components/Card'

class App extends Component {
  
  state = {
    data: [
      {
      route_id: 1,
      status: 'onroute',
      deliveries: 3,
      completed_at: "-"
      },
      {
        route_id: 2,
        status: "onroute",
        deliveries: 1,
        completed_at: "-"
      },
      {
        route_id: 3,
        status: "onroute",
        deliveries: 1,
        completed_at: "-"
      },
    ]
  }

  componentDidMount(){
    setTimeout(
      function() {
          this.websockets()
      }
      .bind(this),
      5000
    )
  }

  websockets = () => {
    setTimeout(this.setState({data: [
      {
        route_id: 1,
        status: "completed",
        deliveries: 4,
        completed_at: "2007-11-09T13:20"
      },
      {
        route_id: 2,
        status: "onroute",
        deliveries: 1,
        completed_at: "-"
      },
      {
        route_id: 3,
        status: "completed",
        deliveries: 2,
        completed_at: "2007-11-09T13:50"
      },
    ]})
    ,30000)
  }
 
  render() {
    return (
      <div>
        Los estados de la ruta cambiarán después de 5 segundos, en específico la ruta 1 y 3
        {this.state.data.map(data => {
          let date = (data.completed_at).split('T')
          if (data.status == "onroute") {
            var statusColor = "badge badge-onroute"
            var borderColor = "card card-onroute"
          } else if (data.status === "completed"){
            var statusColor = "badge badge-completed"
            var borderColor = "card card-completed"
          }
          return(
            <Card
              route={data.route_id}
              status={data.status}
              deliveries={data.deliveries}
              endTravel={date[1]}
              nameColor={statusColor}
              borderColor={borderColor}
             />
          )
        })}
      </div>
    );
  }
}

export default App;