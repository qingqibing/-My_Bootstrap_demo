/**
 * 溢油预测实时数据
 *
 * @class OilRealDataMidModel
 */
class OilRealDataMidModel {
  public windVal: number;
  public windDir: number;
  public waterVal: number;
  public waterDir: number;

  constructor(
    windVal: number,
    windDir: number,
    waterVal: number,
    waterDir: number
  ) {
    this.windDir = windDir;
    this.windVal = windVal;
    this.waterDir = waterDir;
    this.waterVal = waterVal;
  }
}
/**
 *  
 *
 * @class OilModelDetailMidModel
 */
class OilModelDetailMidModel{
    public time:Date;
    public point:Object;
    public windFactor:number;
    public windDir:number;
    public simulateStep:number;
    public consoleStep:number;
    public currentIndeterminacy:number;
    public windIndeterminacy:number;
    public equation
}

export { OilRealDataMidModel };
