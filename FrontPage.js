import React, { Component,useState } from 'react';
import { View,Text,TouchableOpacity,List,StyleSheet,FlatList,ImageBackground, Dimensions, ActivityIndicator,} from 'react-native';
import {Appbar,Button, TextInput,Card, Title} from 'react-native-paper';
import Cards from './Cards';
import { ScrollView } from 'react-native-gesture-handler';
console.disableYellowBox = true;
export default class FrontPage extends Component {
  

     

  constructor(props) {
    super(props);
    this.state = {
      cityname:'',
      temp:0,
      date1:'',
      date2:'',
      date3:'',
      image1:'',
      image2:'',
      image3:'',
      maxtemps1:'',
      maxtemps2:'',
      maxtemps3:'',
      mintemps1:'',
      mintemps2:'',
      mintemps3:'',
      mainname:'',
      data: [],
      show:false,
 
      isloading:false,
      // imgurl:'http://openweathermap.org/img/wn/04d.png',
    };
   this.arr=[]
  }
 
//  getCity(cityname){

//    this.arr=[]
//   fetch('http://autocomplete.wunderground.com/aq?query='+this.state.cityname)
//   .then((response) => response.json())
//   .then((res) => {
//     let i ;
//     for( i=0; i<res.RESULTS.length;  i++){
    
//       // this.state.cityname +=res.RESULTS[i].name
//       let a = {name:res.RESULTS[i].name}
//   this.arr.push(a)
//   let itemData = this.arr.filter((item) => {
//     const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
//     const textData = cityname.toUpperCase();
//     return itemData.indexOf(textData) > -1;
//   })
//     this.setState({cityname:cityname,data:itemData})
// console.log(res.RESULTS[i].name)
//     // console.log(datas)
//     // console.log(res.RESULTS[i].name)
//     }
    
      
   
//   })

 
//   .catch((err) => {
//     alert(err)
//   })
//  }


getHourlyData(){
this.setState({isloading:true})
  if(!this.state.cityname&&this.state.show == false){
    alert('Try Again')
    this.setState({isloading:false})
    this.setState({ show: false });
  }else{
    this.setState({isloading:true,show :true})
    let url = 'http://api.weatherapi.com/v1/forecast.json?key=5fa5821a204a46b9a4c101115202005&q='+this.state.cityname+'&days=5&units=metric'
    fetch(url)
    .then((respone) => respone.json())
    .then((res) => {
    if(res.error){
      alert('Sorry ! Try Again')
      this.setState({isloading:false})
    this.setState({ show: true });

    }else  {
    
      this.setState({temp:res.current.temp_c,cityname:'',isloading:false,mainname:res.current.condition.text,date1:res.forecast.forecastday[0].date
      ,date2:res.forecast.forecastday[1].date,date3:res.forecast.forecastday[2].date,image1:res.forecast.forecastday[0].day.condition.icon,
      image2:res.forecast.forecastday[1].day.condition.icon,image3:res.forecast.forecastday[2].day.condition.icon,maxtemps1:res.forecast.forecastday[0].day.maxtemp_c,
      maxtemps2:res.forecast.forecastday[1].day.maxtemp_c,maxtemps3:res.forecast.forecastday[2].day.maxtemp_c,mintemps1:res.forecast.forecastday[0].day.mintemp_c,
      mintemps2:res.forecast.forecastday[1].day.mintemp_c,mintemps3:res.forecast.forecastday[2].day.mintemp_c
    })
     }
   
    
    })
    .catch((error) => {
      alert(error)
    })
  }
 
}


// getData(){
//   if(!this.state.cityname){
//     alert('Sorry ! Your City is Not Found')
//   }else{
//     let url = 'https://api.openweathermap.org/data/2.5/weather?q='+this.state.cityname+'&appid=f254fd2a4f8fa29d93df9c9a5dc09dff&units=metric'
//     fetch(url) 
//       .then((respone) => respone.json())
//       .then((res) => {
//         if(res.cod == 404){
//           alert('Sorry ! Try Again')
//         }else{
  
        
//         let imgurl = "http://openweathermap.org/img/wn/"+res.weather[0].icon+".png"
//         this.setState({temp:res.main.temp,cityname:'',mainname:res.weather[0].main,imgurl:imgurl})
//       }
//       })
//   }
 
  
  
// }

  render() {
    if(this.state.isloading){
  return (
    <View style={{alignSelf:'center',marginTop:300}}>
<ActivityIndicator/>
<Text>
  Please Wait...
</Text>
    </View>
  )
    }
    return (
      <View>
         <Appbar.Header>
         <Appbar.Action icon="menu" onPress={this._handleSearch} />
        <Appbar.Content
          title="Weather App" 
               />
      </Appbar.Header>
      
      
     <TextInput  label='Enter Your City' onChangeText={(t) => this.setState({cityname:t})}
    
      value={this.state.cityname}
     />
          <Button mode='contained' style={{margin:10}} icon='magnify' onPress={() => this.getHourlyData()}>
       Search 
     </Button>
      
     
  
     
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <Text style={{fontSize:100,alignSelf:'flex-start',margin:10}}>
            {this.state.temp}°C
          </Text>
          
         
          
          
    </View>
    
    <Text style={{fontSize:20,alignSelf:'center'}}>
            {this.state.mainname}
          </Text>

          {this.state.show ? (
           <ScrollView horizontal={true}>
           <View style={{flexDirection:'row'}}>
           <Cards text={this.state.date1} image={'https:'+this.state.image1} maxtemps={this.state.maxtemps1} mintemps={this.state.mintemps1}/>
           <Cards text={this.state.date2} image={'https:'+this.state.image2} maxtemps={this.state.maxtemps2} mintemps={this.state.mintemps2} />
           <Cards text={this.state.date3} image={'https:'+this.state.image3} maxtemps={this.state.maxtemps3} mintemps={this.state.mintemps3}/>
   
           </View>
           </ScrollView>
        ) : null}
         

          

        {/* <TextInput placeholder='Enter City Name' value={this.state.cityname} onChangeText={(t) => this.setState({cityname:t})} keyboardType='ascii-capable'/> */}
       
        
      </View>
    );
  }
}

