import * as React from "react";

import { CSSGrid, layout, easings, SpringGrid, measureItems, makeResponsive } from 'react-stonecutter';
// import { SpringGrid } from "react-stonecutter";

// const Grid = measureItems(SpringGrid, { measureImages: true })


const Grid = makeResponsive(measureItems(SpringGrid, { measureImages: true }), {
  maxWidth: 1200,
  minPadding: 100
});

const { simple, pinterest } = layout;

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

 const { quadIn, quadOut} = easings;

class Spring extends React.Component {
  render() {
    const { masonStyle, masStyle, massWrapperStyle } = styles;

    // const childElements = this.props.elements.map(function(element){
    //     return (
        //     <div>
        //         <Card style={{ width:300, height:element.height, backgroundColor:element.background}}>
        //             <CardContent>
        //                 <p>{element.src}</p>
        //                 <p>{element.number}</p>
        //             </CardContent>
        //         </Card>
        //     </div>
    //      );
    //  });

    return (
      // <CSSGrid
      // component="div"
      // columns={3}
      // columnWidth={300}
      // gutterWidth={10}
      // gutterHeight={5}
      // itemHeight={200}
      // layout={layout.pinterest}
      // duration={2000}
      // easing={quadIn}
      // exit={() => ({ scale: 0, opacity: 5 })}
      // >
      //     {childElements}
      // </CSSGrid>

      <Grid
          component="div"
          // columns={3}
          columnWidth={200}
          gutterWidth={21}
          gutterHeight={12}
          layout={layout.pinterest}
          springConfig={{precision: 0.1 }}
          duration={5500}
          easing={quadOut}
          exit={() => ({ scale: 0, opacity: 5 })}
          // exit={(itemProps, gridProps, gridState) => ({ translateY: gridState.gridHeight + 500 })}
      >
          {/* {childElements} */}
          <div style={{width:200}}>
              <Card style={{ backgroundColor:'green'}}>
                  <CardContent style={{backgroundColor:'green'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>HeyBud</p>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card style={{height:144}}>
                  <CardContent style={{backgroundColor:'yellow'}}>
                      <p>Roy</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div >
              <Card style={{ backgroundColor:'green'}}>
                  <CardContent style={{backgroundColor:'green'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>HeyBud</p>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card style={{ height:66 }}>
                  <CardContent style={{backgroundColor:'red'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div >
              <Card style={{ height:144, backgroundColor:'green'}}>
                  <CardContent style={{backgroundColor:'pink'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>HeyBud</p>
                  </CardContent>
              </Card>
          </div>
          <div >
              <Card style={{height:144}}>
                  <CardContent style={{backgroundColor:'yellow'}}>
                      <p>Roy</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div >
              <Card style={{ height:250, backgroundColor:'green'}}>
                  <CardContent style={{backgroundColor:'green'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>HeyBud</p>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card style={{ height:144}}>
                  <CardContent style={{backgroundColor:'red'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card>
                  <CardContent style={{backgroundColor:'grey'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card>
                  <CardContent style={{backgroundColor:'blue'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card style={{ height:144}}>
                  <CardContent style={{backgroundColor:'orange'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card style={{ height:144}}>
                  <CardContent style={{backgroundColor:'brown'}}>
                      <p>dhan</p>
                      <p>201</p>
                      <p>Hello</p>
                  </CardContent>
              </Card>
          </div>
       </Grid>

    //   <div style={{ border: "1px solid red", height: 400 }}>
    //     <SpringGrid
    //       component="ul"
    //       columns={5}
    //       columnWidth={150}
    //       gutterWidth={5}
    //       gutterHeight={5}
    //       itemHeight={200}
    //       springConfig={{ stiffness: 170, damping: 26 }}
    //     >
    //       <li key="A" style={{border: '1px solid green'}}>A</li>
    //       <li key="B" style={{border: '1px solid green'}}>B</li>
    //       <li key="C" style={{border: '1px solid green'}}>C</li>
    //     </SpringGrid>
    //   </div>
    );
  }
}

const styles = {
  // masonStyle:{
  //      width:'30%'
  // },
  // masStyle:{
  //     marginBottom:30
  // },
  // massWrapperStyle:{
  //     height:500,
  //     overflowY: 'scroll'
  // }
};

export default Spring;
