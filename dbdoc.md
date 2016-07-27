##User
  * Account String
  * Username String
  * Password String
  * Priority Number
    - `1`: 
    - `2`: 
    - `3`: 
  * Registe-time Date

##Base
  * Date 日期 Date
  * System 系统 String
    - `FOUR_DMZ`: 四楼DMZ区巡检
    - `FOUR_NORMAL`: 四楼日常巡检
    - `FIVE_ONE`: 5-1系统巡检
    - `FIVE_TWO`: 5-2系统巡检
    - `FIVE_THREE` : 5-3系统巡检
    - `SIX_MDC`: 六楼MDC巡检
    - `SIX_BIZ`: 六楼业务巡检
    - `EIGHT`: 八楼系统巡检
    - `ELEVEN`: 十一楼系统巡检
      - `AVID`: AVID系统巡检
      - `TV`: 电视剧缩编巡检
  * Subsystem 系统子项目 String
    - `STORAGE`: 
    - `SERVER`: 
    - `SWITCH`: 
    - ``
  * Supervisor-1 责任人A岗 String
  * Supervisor-2 责任人B岗 String
  * Supervisor-3 责任人C岗 String
  * respector 巡检人 String
  * Experiment 设备 String
  * IP 设备管理IP String
  * Type 类别 String
    - `SERVER`: 服务器
    - `VIRTUAL`: 虚拟机
    - `SWITCH`: 交换机
    - `FIREWALL`: 防火墙
    - `SAFE`: 安全
    - `DISC_SERVER`: 域控服务器
    - `MDS_SERVER`: MDS服务器
    - `NAS_SERVER`: NAS服务器
    - `NAMESERVER`: Nameserver
    - `COMP_SERVER`: 组件服务器
  * Work 巡检内容 String
  * Category 巡检指标类型 String
    - `RECORD`: 定量记录
    - `ANALYS_SOFEWARE`: 定性分析-软件
    - `ANALYS_HARDWARE`: 定性分析-硬件
  * StateOrData 状态或数据记录 String
    - `NORMAL`: 正常
    - `NUMBER`: 数字
  * More 备注 String

##Event
  * Date 日期 Date
  * System 系统 String inherit
  * Event 运维事件 String 

##Biz
  * Date 日期 Date
  * System 系统 String inherit
  * Column 栏目名 
  * Play 播出时段
    - `START`: Time
    - `FINISH`: Time
  * NumOfNeeds 开播到位素材条数 Number
  * AllReady 全部素材到位时间 Time
  * State 播出情况 Bool
