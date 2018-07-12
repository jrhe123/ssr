import * as React from 'react';
import Masonry from 'react-masonry-component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
 
const masonryOptions = {
    columnWidth: 10,
    fitWidth: true,
    transitionDuration: '0.8s',
    //gutter: 10,
    originTop: true,
    percentPosition: true,
    

};
 
// const imagesLoadedOptions = { background: '.my-bg-image-el' }


 
class WidgetTemplate extends React.Component {
    render() {

        const {
            masStyle,
            itemStyle
        } = styles;

        const childElements = this.props.elements.map(function(element){
            return (
                <div style={{marginBottom:element.marginBottom, marginRight:12, height:element.height, width:element.width}}>
                    <Card style={{height:'100%', width:'100%', background:element.background, color:element.color, padding:0, boxShadow:'0 2px 4px 0 #DFE6EEX'}}>
                            <p style={{margin:0, fontSize:element.srcSize, textAlign:element.textAlign, marginTop:element.textMarginTop, marginLeft:element.textMarginLeft}}>{element.src}</p>
                            <p style={{margin:0, fontSize:element.numberSize, textAlign:'center', marginTop:element.numMarginTop}}>{element.number}</p>
                    </Card>
                </div>
             );
         });
       
        return (
                <Masonry
                    // className={'my-gallery-class'} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    // imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {childElements}
                </Masonry>
        );
    }
}

const styles = {
    itemStyle:{
        border:'2px solid #333'
    }
}
 
export default WidgetTemplate;