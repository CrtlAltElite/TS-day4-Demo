import {Canvas,  RightLeaningContainer, Component, LeftLeaningContainer, CircleContainer, WidgetClick} from './Widget'

const canvas = new Canvas(document.body);
const rla = new RightLeaningContainer();
const lla = new LeftLeaningContainer();

canvas.state = {testVar: "Sean is handsome", var2: "Brian is beautiful"}

const rlwidget=new Component();
rlwidget.shape= rla;
rlwidget.locationLeft=5;
rlwidget.locationTop=7;
rlwidget.height= 5;
rlwidget.content = `<h1>OOP RULES</h1> {{testVar}} {{var2}}`
canvas.addWidget(rlwidget)

const llwidget = new Component();
llwidget.shape = lla
llwidget.locationLeft=3;
llwidget.locationTop=4;
llwidget.shape.borderColor="red";
llwidget.shape.zIndex=99;

let contentImage:string= `<img style="height:auto; max-width:80%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1000px-LEGO_logo.svg.png">`
llwidget.content = contentImage;
canvas.addWidget(llwidget)

const circleWidget = new Component();
circleWidget.shape =  new CircleContainer();
circleWidget.locationTop = 4;
circleWidget.locationLeft = 4;

new WidgetClick(circleWidget, (_, widget:Component)=>{
    let widgets = widget.canvas?.widgets!;
    for (const w of widgets){
        w.width += 2;
        w.height +=2;
        w.canvas!.state={testVar:"Sean is a Smarty Pants"}
        w.canvas?.render()
        setTimeout(()=>{
            w.width-=2
            w.height-=2
            w.canvas?.render()
        }, 1000)
    }
})
canvas.addWidget(circleWidget)

