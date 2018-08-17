  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  //action creators and ajax
   
  //custom css for this page

  

  //ui elements
  import {Container, Row, Col} from 'reactstrap';
  import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
  import Sunny from './images/sunny.svg'
  import Cloudy from './images/cloudy.svg';
  import Rainy from './images/rainy.svg';
  import Snowy from './images/snowy.svg'
  const myImageConfigTable = {
    "sunny": Sunny,
    "rainy": Rainy,
    "snowy": Snowy,
    "cloudy": Cloudy
  }
  

  class Day {
    constructor(name, forecast) {
      this.name = name
      this.forecast = forecast
    }

  }

  class WeatherForecast {
    constructor(weather, minTemp, maxTemp) {
        this.weather = weather
        this.minTemp  = minTemp
        this.maxTemp = maxTemp
    }

  }
  //components
  class FiveDaysWeather extends Component {
    
    constructor(props) {
      super(props); 
      this.state = { averageWeatherType : "" , weather : []}
      this.getAverageWeatherType = this.getAverageWeatherType.bind(this);
      this.setAverageWeatherType = this.setAverageWeatherType.bind(this);
    
    }
 
    
    componentDidMount() {
  
        const weekdays = [
         "monday",
         "tuesday", 
         "wednesday", 
         "thursday", 
         "friday", 
         "saturday", 
         "sunday"];

        const dayIndex = new Date().getDay() - 1;
        const forecastDays = this.props.weatherInfo.map((day, idx) => {
        const weatherDay = weekdays[(dayIndex + idx + 1) % weekdays.length];
        const forecast = new WeatherForecast(
          day.weather, 
          day.minTemp, 
          day.maxTemp);
        return new Day(weatherDay, forecast);           
        });
        this.getAverageWeatherType(forecastDays);
      
          
        };
        
      getAverageWeatherType(forecastDays){
        let averageWeather;
        const ranking = ["snowy", "rainy", "cloudy", "sunny"];
        const rankSum = forecastDays.reduce((rankSum, day) => 
        rankSum + ranking.indexOf(day.forecast.weather),0);
        averageWeather = ranking[Math.round(rankSum / 5)];
        this.setState({weather: forecastDays})
        this.setAverageWeatherType(averageWeather)
  
       
        
         
     
        }
      setAverageWeatherType(mode) {
          switch(mode){
            case "sunny": {
              this.setState({ averageWeatherType: "sunny" })
            }
            break;
            case "cloudy": {
              this.setState({averageWeatherType: "cloudy"});
            }
            break;
            case "rainy": {
              this.setState({averageWeatherType: "rainy"});
            }
            break;
            case "snowy": {
              this.setState({averageWeatherType: "snowy"});
            }
            break;
            default: {
               this.setState({ averageWeatherType: "sunny"});
            }
          }
      }
        

    render() {
  
      return (
      <div className="fiveDaysWeatherBg">
        <Row>
            <Container fluid={true} className="mediaChanger">
                  <Container className="weatherWrapper">
                      <h1 style={{color : "white", textAlign: "center", marginTop: "20px"}}>The city you have picked is {this.props.place} and you will have { this.state.averageWeatherType } week in general, thats why your background looks like that</h1>
 
                  </Container>
                  <Container fluid={true} className={ this.state.averageWeatherType + "Background" }>
                    <Row className="centerByMedia" >
                      {  
                        this.state.weather.map((day, idx)=>{
                          return (

                            <Col md={2} sm={12} key={idx}>
                            <Card className="cardEdition">
                            <CardImg top width="100%" src={myImageConfigTable[day.forecast.weather]}
                             className="cardImage"
                             alt="Card image cap" />
                            <CardBody>
                              <CardTitle>{day.name}</CardTitle>
                              <CardSubtitle>the weather for the day will be  {day.forecast.weather}</CardSubtitle>
                            
                              <CardText style={{marginTop: "20px"}}> <p>Day min temp: {day.forecast.minTemp}  &deg;C </p><p>Day max temp: {day.forecast.maxTemp}  &deg;C</p></CardText>
                  
                            </CardBody>
                            </Card>
      
                            </Col>
                          )

                        })
                      }
    
                    </Row>
                  </Container>
            </Container>     
        </Row> 
       
   
      </div>
      );
    }
  }

  function mapStateToProps(state){
    return{
      place: state.weather.place,
      weatherInfo: state.weather.weatherInfo
    }
  }
/* since i saw u have some requirments for static types
and i think PropTypes library is a thing in react - redux development 
and provides better solution than flow or typescript for this specific app i will use it for typechecking,
just becaouse we are goin to use mostly react props its easy and smooth approach
*/

FiveDaysWeather.propTypes = {
   place : PropTypes.string
  }
  
  export default connect(mapStateToProps, { 
   
    


  })(FiveDaysWeather);

