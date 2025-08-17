flowchart TB
    %% Data Sources & Ingestion
    subgraph "Data Sources"
        A1["Python Order Generator<br/>every 10 min"]
        A2["API Endpoints<br/>(REST/GraphQL)"]
        A3["File Uploads<br/>(CSV, JSON, Parquet)"]
        A4["IoT Devices<br/>(Real-time streams)"]
        A5["Third-party APIs<br/>(External data)"]
    end

    %% Message Queue & Streaming
    subgraph "Event Streaming"
        B1["Apache Kafka<br/>(Event streaming)"]
        B2["Apache Pulsar<br/>(Alternative streaming)"]
        B3["AWS Kinesis<br/>(Cloud streaming)"]
    end

    %% OLTP Database
    subgraph "OLTP Layer"
        C1["PostgreSQL<br/>(Primary DB)"]
        C2["Redis<br/>(Caching layer)"]
        C3["MongoDB<br/>(Document store)"]
    end

    %% Orchestration & Scheduling
    subgraph "Orchestration"
        D1["Apache Airflow<br/>(Workflow orchestration)"]
        D2["Prefect<br/>(Modern orchestration)"]
        D3["Dagster<br/>(Data orchestration)"]
        D4["Temporal<br/>(Workflow engine)"]
    end

    %% Data Quality & Validation
    subgraph "Data Quality"
        E1["Great Expectations<br/>(Data validation)"]
        E2["Monte Carlo<br/>(Data observability)"]
        E3["Anomalo<br/>(Anomaly detection)"]
        E4["Soda<br/>(Data testing)"]
    end

    %% ETL/ELT Processing
    subgraph "Data Processing"
        F1["Apache Spark<br/>(Batch processing)"]
        F2["Apache Flink<br/>(Stream processing)"]
        F3["dbt<br/>(Transformations)"]
        F4["Apache Beam<br/>(Unified processing)"]
    end

    %% Data Lake & Warehouse
    subgraph "Data Storage"
        G1["AWS S3<br/>(Data lake)"]
        G2["Snowflake<br/>(Data warehouse)"]
        G3["Databricks<br/>(Lakehouse)"]
        G4["BigQuery<br/>(Cloud warehouse)"]
    end

    %% Data Governance
    subgraph "Data Governance"
        H1["Apache Atlas<br/>(Metadata management)"]
        H2["DataHub<br/>(Data catalog)"]
        H3["Amundsen<br/>(Discovery)"]
        H4["OpenLineage<br/>(Lineage tracking)"]
    end

    %% Monitoring & Observability
    subgraph "Monitoring"
        I1["Grafana<br/>(Metrics dashboard)"]
        I2["Prometheus<br/>(Metrics collection)"]
        I3["DataDog<br/>(APM & monitoring)"]
        I4["New Relic<br/>(Performance monitoring)"]
    end

    %% Business Intelligence
    subgraph "BI & Analytics"
        J1["Power BI<br/>(Business dashboards)"]
        J2["Tableau<br/>(Data visualization)"]
        J3["Looker<br/>(Modern BI)"]
        J4["Metabase<br/>(Open-source BI)"]
    end

    %% Machine Learning
    subgraph "ML & AI"
        K1["MLflow<br/>(ML lifecycle)"]
        K2["Kubeflow<br/>(ML orchestration)"]
        K3["Weights & Biases<br/>(ML experiment tracking)"]
        K4["Feature Store<br/>(Feature management)"]
    end

    %% Real-time Applications
    subgraph "Real-time Apps"
        L1["Streamlit<br/>(Live monitoring)"]
        L2["FastAPI<br/>(API services)"]
        L3["React/Vue.js<br/>(Web dashboards)"]
        L4["Mobile Apps<br/>(iOS/Android)"]
    end

    %% Security & Compliance
    subgraph "Security"
        M1["Apache Ranger<br/>(Access control)"]
        M2["Vault<br/>(Secrets management)"]
        M3["Encryption<br/>(Data protection)"]
        M4["Audit Logs<br/>(Compliance)"]
    end

    %% Connections - Data Flow
    A1 --> B1
    A2 --> B1
    A3 --> B1
    A4 --> B2
    A5 --> B3

    B1 --> C1
    B2 --> C1
    B3 --> C1
    C2 -.-> C1
    C3 --> C1

    C1 --> D1
    D1 --> E1
    E1 --> F1
    F1 --> G1
    G1 --> G2

    F3 --> G2
    G2 --> H1
    H1 --> I1
    I1 --> J1

    G2 --> K1
    K1 --> L1
    L1 --> M1

    %% Styling
    classDef source fill:#e1f5fe
    classDef streaming fill:#f3e5f5
    classDef oltp fill:#e8f5e8
    classDef orchestration fill:#fff3e0
    classDef quality fill:#fce4ec
    classDef processing fill:#f1f8e9
    classDef storage fill:#e0f2f1
    classDef governance fill:#fafafa
    classDef monitoring fill:#fff8e1
    classDef bi fill:#e3f2fd
    classDef ml fill:#f9fbe7
    classDef realtime fill:#fdf2f8
    classDef security fill:#ffebee

    class A1,A2,A3,A4,A5 source
    class B1,B2,B3 streaming
    class C1,C2,C3 oltp
    class D1,D2,D3,D4 orchestration
    class E1,E2,E3,E4 quality
    class F1,F2,F3,F4 processing
    class G1,G2,G3,G4 storage
    class H1,H2,H3,H4 governance
    class I1,I2,I3,I4 monitoring
    class J1,J2,J3,J4 bi
    class K1,K2,K3,K4 ml
    class L1,L2,L3,L4 realtime
    class M1,M2,M3,M4 security 