flowchart LR
    %% CDR Generation
    A["📞 CDR Generator<br/>Python script<br/>Creates random call logs<br/>every 10 minutes"]
    
    %% Real-time Streaming
    B["⚡ Spark Streaming<br/>Processes CDRs in real-time<br/>Stores in HDFS"]
    
    %% Storage
    C["🗄️ HDFS<br/>Raw CDR data<br/>Parquet format"]
    
    %% Batch Processing
    D["🔄 Airflow Batch Job<br/>Moves data to PostgreSQL<br/>Daily/hourly batches"]
    
    %% Database
    E["🐘 PostgreSQL<br/>Structured CDR data<br/>Indexed for queries"]
    
    %% Data Modeling
    F["🔧 dbt Models<br/>Dimensional modeling<br/>Fact & Dimension tables"]
    
    %% Data Quality
    G["✅ dbt Tests<br/>Data quality checks<br/>Business rules validation"]
    
    %% Monitoring
    H["📊 Streamlit Monitoring<br/>Real-time pipeline health<br/>CDR metrics dashboard"]
    
    %% Business Reporting
    I["📈 Power BI<br/>Business reports<br/>Call analytics"]
    
    %% Team Access
    J["👥 Business Team<br/>Uses Power BI"]
    K["👨‍💻 Data Team<br/>Uses Streamlit"]
    
    %% Orchestration
    L["⚙️ Airflow<br/>Schedules CDR generation<br/>& batch processing"]
    
    %% Connections
    L --> A
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    F --> I
    H --> K
    I --> J

    %% Real-time monitoring connections
    A -.-> H
    B -.-> H
    C -.-> H
    D -.-> H
    E -.-> H
    F -.-> H
    
    %% Styling
    classDef generation fill:#e3f2fd
    classDef streaming fill:#fff3e0
    classDef storage fill:#f3e5f5
    classDef processing fill:#e8f5e8
    classDef database fill:#fce4ec
    classDef reporting fill:#fff8e1
    classDef team fill:#f1f8e9
    
    class A generation
    class B streaming
    class C storage
    class D,F,G processing
    class E database
    class H,I reporting
    class J,K team
    class L generation 