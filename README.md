# Bangkok Privacy-Preserved Mobility Explorer

An evaluation framework and interactive interface for the privacy-utility trade-off in spatially aggregated origin-destination (OD) mobility data, demonstrated on the Bangkok taxi trajectory dataset.

This repository contains the code developed for the Master's thesis *"The Privacy-Utility Trade-off in Spatial Aggregation: An Evaluation Framework for Origin-Destination Flow Visualization."* This thesis was completed as part of the Erasmus Mundus Master's programme in Cartography (MSc Cartography).

## Overview

Human mobility data, including OD trip records, offers valuable insights for urban planning and transportation. However, sharing such data raises privacy concerns, since individual movement patterns can be re-identified even from aggregated or pseudonymized datasets. Spatial aggregation is a widely used geomasking technique for protecting this kind of data, but no prior work has systematically compared how different aggregation methods and resolutions affect both privacy protection and data utility.

This project addresses that gap with three components:

1. **Evaluation framework** — quantifies privacy protection via spatial k-anonymity and l-diversity (adapted to enforce protection on both the origin and destination sides of each trip), and utility loss via five mobility-characteristic metrics: Gini coefficient, Common Part of Commuters (CPC), Visits per Location, Trip Distance, and PageRank, each normalized onto a common scale.
2. **Case study** — the framework applied to the Bangkok taxi trajectory dataset (November 2025, published as open data by the [iTIC Foundation](https://itic.longdo.com/opendata/)) across five spatial aggregation methods (S2, H3, Triangle, administrative boundaries, and Voronoi diagram) and multiple resolutions.
3. **Interactive interface** — a web-based visualization tool that lets analysts and decision-makers explore aggregated OD flow patterns and compare privacy-utility outcomes across configurations.

## Interface features

The interface (`privacy.html`) is organized into an **Explorer** view and a **Decision Support** view:

* **Data Visualization** — switch between Origin, Destination, Travel Demand, and OD Flow map layers.
* **Aggregation Method and Resolution** — select among S2, H3, Triangle, Administrative, and Voronoi aggregations at multiple resolutions.
* **Privacy-preserving Method** — choose k-anonymity or l-diversity and a target data retention percentage; the interface reports the resulting threshold (k or l) and the pass/fail rate of cells at that threshold.
* **Utility Score** — a live chart of information loss across the five utility metrics for the selected configuration; expandable to compare k-anonymity and l-diversity side by side.
* **Temporal View** — an OD heat-matrix comparing raw, anonymized, and difference views across time of day and day of week.
* **Decision Support Panel** — a results table of every aggregation × resolution × privacy-method × retention combination. Each utility metric has its own slider acting as an independent max-allowed-value filter (not a blended score), so you can filter by just the metric(s) you care about; non-matching combinations are grayed out. Sortable by any column, with a per-row radar-chart breakdown on click.
* English and Thai language support.

Maps are rendered client-side with [Leaflet.js](https://leafletjs.com/).

## Repository structure

```
.
├── app.py                          # Streamlit entry point (embeds static/privacy.html in an iframe)
├── requirements.txt                # Python dependencies (Streamlit)
├── .streamlit/
│   └── config.toml                 # enables Streamlit's static file serving for static/
├── .gitignore
├── README.md
└── static/                         # the interface itself — a static site, no build step
    ├── privacy.html                # main page: sidebar controls, modals, layout
    ├── privacy.js                  # all interactivity: map rendering, metrics, i18n, Decision Support
    ├── style.css                   # theme, layout, glass-card styling
    ├── oddata-result/
    │   ├── od_sample.js            # embedded 10% OD trip sample (33,789 of 337,887 trips)
    │   └── utility_results.js      # precomputed utility metrics per configuration (Decision Support table)
    └── tessellations/              # GeoJSON cell boundaries, one subfolder per aggregation method
        ├── administrative/         # admin_lv2, admin_lv3
        ├── h3/                     # res_6, res_7, res_8
        ├── s2/                     # level_11, level_12, level_13
        ├── triangle/               # res_10, res_11, res_12
        └── voronoi/                # kmeans_k100, kmeans_k200
```

## Installation

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
pip install -r requirements.txt
```

The interface itself has no dependencies or build step — everything under `static/` is plain HTML/CSS/JS loaded directly by the browser (Leaflet and Chart.js are pulled from a CDN).

## Usage

**Option 1 — static site directly** (no Streamlit needed):

```bash
cd static
python -m http.server 8005
# then open http://localhost:8005/privacy.html
```

**Option 2 — via Streamlit** (matches how it's deployed on Streamlit Community Cloud):

```bash
streamlit run app.py
```

`static/` is served by Streamlit's static file server (`enableStaticServing = true` in `.streamlit/config.toml`) and `app.py` embeds `static/privacy.html` full-width via an iframe.

## Data source

Bangkok taxi trajectory data (November 2025), published as open data by the [iTIC Foundation](https://itic.longdo.com/opendata/), a Thai non-profit organization that collects and processes traffic data in Thailand.

## Citation

If you use this framework or code, please cite:

> Sirinapaphan, S. (2026). *The Privacy-Utility Trade-off in Spatial Aggregation: An Evaluation Framework for Origin-Destination Flow Visualization* [Master's thesis, Technische Universität Dresden]. Technische Universität Dresden.

## Author

Suphaphong Sirinapaphan

