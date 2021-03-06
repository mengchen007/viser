import * as Style from './Style';
import { Component, Input } from '@angular/core';
import { Chart } from '../Chart';

interface ICrosshairs {
  type?: 'rect' | 'x' | 'y' | 'cross',
  style?: Style.ILineStyle;
}

@Component({
  selector: 'Tooltip',
  template: `<div #chartDom></div>`,
})
class Tooltip extends Chart {
  @Input() showTitle?: boolean;
  @Input() offset?: number;
  @Input() crosshairs?: ICrosshairs;
  @Input() containerTpl?: string;
  @Input() itemTpl?: string;
  @Input() inPlot?: boolean;
  @Input() follow?: boolean;
  @Input() shared?: boolean;
  @Input() position?: 'left' | 'right' | 'top' | 'bottom';
}

export default Tooltip;
