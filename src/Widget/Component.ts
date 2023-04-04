import { v4 as uuidv4 } from "uuid";
import Canvas from "./Canvas";
import Click from "./Click";
import Container from "./Container";
import { LeftLeaningShape } from "./containers";
import { GridUnit } from "./types";

export default class Component {

    constructor(
      private _id: string = uuidv4(),
      private _shape: Container = new LeftLeaningShape(),
      private _click?: Click,
      private _width: GridUnit = 2,
      private _height: GridUnit = 2,
      private _locationTop: GridUnit = 1,
      private _locationLeft: GridUnit = 1,
      private _content: string = "<div></div>",
      private _canvas?: Canvas | undefined
    ) {}


    public get canvas(): Canvas | undefined {
      return this._canvas;
    }

    public set canvas(value: Canvas | undefined) {
      this._canvas = value;
    }

    public get click(): Click | undefined {
      return this._click;
    }

    public set click(value: Click | undefined) {
      this._click = value;
    }

    public get content(): string {
      return this._content;
    }

    public set content(value: string) {
      this._content = value;
    }

    public get height(): GridUnit {
      return this._height;
    }

    public set height(value: GridUnit) {
      this._height = value;
    }

    public get id(): string {
      return this._id;
    }

    public get locationLeft(): GridUnit {
      return this._locationLeft;
    }

    public set locationLeft(value: GridUnit) {
      this._locationLeft = value;
    }

    public get locationTop(): GridUnit {
      return this._locationTop;
    }

    public set locationTop(value: GridUnit) {
      this._locationTop = value;
    }

    public get shape(): Container {
      return this._shape;
    }

    public set shape(value: Container) {
      this._shape = value;
    }

    public get width(): GridUnit {
      return this._width;
    }

    public set width(value: GridUnit) {
      this._width = value;
    }

}