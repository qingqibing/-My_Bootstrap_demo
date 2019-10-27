import { OilEquation } from '../enum/Equation';

/**
 * 溢油预测实时数据
 *
 * @class OilRealDataMidModel
 */
class OilRealDataMidModel {
  public windVal: number;
  public windDir: number;
  public currentVal: number;
  public currentDir: number;
  public time: Date;
  public point: any;

  constructor(
    windVal: number,
    windDir: number,
    currentVal: number,
    currentDir: number,
    time: Date,
    point: any,
  ) {
    this.windDir = windDir;
    this.windVal = windVal;
    this.currentDir = currentDir;
    this.currentVal = currentVal;
    this.time = time;
    this.point = point;
  }
}
/**
 * 溢油模型参数的 mid model
 *
 * @class OilModelDetailMidModel
 */
// tslint:disable-next-line: max-classes-per-file
class OilModelDetailMidModel {
  public time: Date;
  public point: any;
  /**
   * 风偏系数
   *
   * @type {number}
   * @memberof OilModelDetailMidModel
   */
  public windFactor: number;

  public windDir: number;
  /**
   * 模拟步长
   *
   * @type {number}
   * @memberof OilModelDetailMidModel
   */
  public simulateStep: number;
  public consoleStep: number;
  /**
   * 流场不确定性
   *
   * @type {number}
   * @memberof OilModelDetailMidModel
   */
  public currentIndeterminacy: number;
  /**
   * 风场不确定性
   *
   * @type {number}
   * @memberof OilModelDetailMidModel
   */
  public windIndeterminacy: number;

  /**
   * 求解方法
   *
   * @type {OilEquation}
   * @memberof OilModelDetailMidModel
   */
  public equation: OilEquation;

  constructor(
    time: Date,
    point: any,
    windFactor: number,
    windDir: number,
    simulateStep: number,
    consoleStep: number,
    currentIndeterminacy: number,
    windIndeterminacy: number,
    equation: OilEquation,
  ) {
    this.time = time;
    this.point = point;
    this.windFactor = windFactor;
    this.windDir = windDir;
    this.simulateStep = simulateStep;
    this.consoleStep = consoleStep;
    this.currentIndeterminacy = currentIndeterminacy;
    this.windIndeterminacy = windIndeterminacy;
    this.equation = equation;
  }
}

export { OilRealDataMidModel, OilModelDetailMidModel };
