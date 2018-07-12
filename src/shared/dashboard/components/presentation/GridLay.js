import * as React from "react";
import GridLayout from 'react-grid-layout';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



class GridLay extends React.Component {
  render() {

    const childElements = this.props.elements.map(function(element){
        return (
            <div key={element.key} style={{backgroundColor:element.background}}>
                <p>{element.src}</p>
            </div>
         );
     });
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: '0', x: 0, y: 0, w: 4, h: 6, static:true},
      {i: '1', x: 4, y: 0, w: 2, h: 3, static:true},
      {i: '2', x: 6, y: 0, w: 2, h: 6, static:true},
      {i: '3', x: 4, y: 3, w: 2, h: 3, static:true},
    //   {i: '4', x: 8, y: 0, w: 2, h: 2, static:true},
    //   {i: '5', x: 10, y: 0, w: 2, h: 4, static:true},
    //   {i: '6', x: 0, y: 3, w: 2, h: 2, static:true},
    //   {i: '7', x: 2, y: 5, w: 2, h: 5, static:true},
    //   {i: '8', x: 8, y: 2, w: 2, h: 2, static:true},
    //   {i: '9', x: 6, y: 5, w: 2, h: 3, static:true},
    //   {i: '10', x: 8, y: 2, w: 2, h: 2, static:true},
    //   {i: '11', x: 10, y: 4, w: 2, h: 2, static:true},
    //   {i: '12', x: 0, y: 7, w: 2, h: 4, static:true}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      {childElements}
        {/* <div key="0" style={{backgroundColor:element.background}}>{element.src}</div>
        <div key="1" style={{backgroundColor:element.background}}>{element.src}</div>
        <div key="2"  style={{backgroundColor:element.background}}>{element.src}</div>
        <div key="3"  style={{backgroundColor:element.background}}>{element.src}</div> */}
        {/* <div key="0" style={{backgroundColor:'red'}}>0</div>
        <div key="1" style={{backgroundColor:'yellow'}}>1</div>
        <div key="2"  style={{backgroundColor:'red'}}>2</div>
        <div key="3"  style={{backgroundColor:'red'}}>3</div> */}
        {/* <div key="4"  style={{backgroundColor:'red'}}>4</div> */}
        {/* <div key="5"  style={{backgroundColor:'red'}}>5</div>
        <div key="6"  style={{backgroundColor:'red'}}>6</div>
        <div key="7"  style={{backgroundColor:'red'}}>7</div>
        <div key="8"  style={{backgroundColor:'red'}}>8</div>
        <div key="9"  style={{backgroundColor:'red'}}>9</div>
        <div key="10"  style={{backgroundColor:'green'}}>10</div>
        <div key="11"  style={{backgroundColor:'yellow'}}>11</div>
        <div key="12"  style={{backgroundColor:'pink'}}>12</div> */}
          {/* <div key="a">
              <Card style={{ backgroundColor:'green'}}>
                  <CardContent style={{backgroundColor:'green'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>HeyBud</p>
                  </CardContent>
              </Card>
          </div>
          <div key="b">
              <Card>
                  <CardContent style={{backgroundColor:'red'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div key="c">
              <Card>
                  <CardContent style={{backgroundColor:'pink'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>HeyBud</p>
                  </CardContent>
              </Card>
          </div> */}
      </GridLayout>
    )
  }
}

export default GridLay;
