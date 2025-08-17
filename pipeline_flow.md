flowchart TD
    %% Start
    START([Start Pipeline]) --> SCHEDULE{Every 10 minutes?}
    
    %% Data Generation
    SCHEDULE -->|Yes| GENERATE["Python Order Generator
    Creates sample orders"]
    SCHEDULE -->|No| WAIT[Wait...]
    WAIT --> SCHEDULE
    
    %% Data Validation
    GENERATE --> VALIDATE{Validate Data?}
    VALIDATE -->|Valid| SAVE["Save to PostgreSQL
    Transactional Database"]
    VALIDATE -->|Invalid| LOG_ERROR[Log Error & Skip]
    LOG_ERROR --> GENERATE
    
    %% ETL Process
    SAVE --> ETL_TRIGGER{ETL Job Ready?}
    ETL_TRIGGER -->|Yes| ETL["ETL Script
    Postgres → Snowflake"]
    ETL_TRIGGER -->|No| WAIT_ETL[Wait for ETL...]
    WAIT_ETL --> ETL_TRIGGER
    
    %% ETL Success/Failure
    ETL --> ETL_CHECK{ETL Success?}
    ETL_CHECK -->|Success| RAW["Load to Snowflake
    Raw Layer"]
    ETL_CHECK -->|Failed| ETL_RETRY["Retry ETL
    (3 attempts)"]
    ETL_RETRY --> ETL_CHECK
    
    %% Data Processing
    RAW --> STAGING["Transform to
    Staging Layer"]
    STAGING --> DBT_RUN["dbt Models
    Business Logic"]
    
    %% dbt Processing
    DBT_RUN --> DBT_TEST{Data Quality
    Tests Pass?}
    DBT_TEST -->|Pass| FINAL["Final Tables
    Ready for Use"]
    DBT_TEST -->|Fail| DBT_FIX["Fix Data Issues
    Re-run dbt"]
    DBT_FIX --> DBT_RUN
    
    %% Data Consumption
    FINAL --> CONSUME{Who Needs Data?}
    
    %% Business Users
    CONSUME -->|Business Users| POWERBI["Power BI
    Business Dashboards"]
    POWERBI --> BUSINESS_VIEW["Business Users
    View Reports"]
    
    %% Data Team
    CONSUME -->|Data Team| STREAMLIT["Streamlit
    Live Monitoring"]
    STREAMLIT --> DATA_TEAM_VIEW["Data Team
    Monitor Pipeline"]
    
    %% Monitoring & Alerts
    GENERATE --> MONITOR["Monitor Process
    Log Success/Failure"]
    SAVE --> MONITOR
    ETL --> MONITOR
    DBT_RUN --> MONITOR
    
    MONITOR --> ALERT{Any Failures?}
    ALERT -->|Yes| SEND_EMAIL["Send Email Alert
    to Data Team"]
    ALERT -->|No| CONTINUE[Continue Process]
    
    %% End
    BUSINESS_VIEW --> END([Pipeline Complete])
    DATA_TEAM_VIEW --> END
    CONTINUE --> END
    
    %% Styling
    classDef startEnd fill:#e3f2fd
    classDef process fill:#f3e5f5
    classDef decision fill:#fff3e0
    classDef data fill:#e8f5e8
    classDef error fill:#ffebee
    classDef monitoring fill:#fce4ec
    
    class START,END startEnd
    class GENERATE,SAVE,ETL,RAW,STAGING,DBT_RUN,FINAL process
    class SCHEDULE,VALIDATE,ETL_TRIGGER,ETL_CHECK,DBT_TEST,CONSUME,ALERT decision
    class POWERBI,STREAMLIT data
    class LOG_ERROR,ETL_RETRY,DBT_FIX error
    class MONITOR,SEND_EMAIL monitoring 