# odviz-privacyutility-bkk
An evaluation framework and interactive interface for the privacy-utility trade-off in spatially aggregated origin-destination mobility data, demonstrated on Bangkok taxi trajectories.
This repository contains the code developed for the Master's thesis "The Privacy-Utility Trade-off in Spatial Aggregation: An Evaluation Framework for Origin-Destination Flow Visualization."

Overview

Human mobility data, including OD trip records, offers valuable insights for urban planning and transportation. However, sharing such data raises privacy concerns, since individual movement patterns can be re-identified even from aggregated or pseudonymized datasets. Spatial aggregation is a widely used geomasking technique for protecting this kind of data, but no prior work has systematically compared how different aggregation methods and resolutions affect both privacy protection and data utility.

This project addresses that gap with three components:

Evaluation framework — quantifies privacy protection via spatial k-anonymity and l-diversity (adapted to enforce protection on both the origin and destination sides of each trip), and utility loss via five mobility-characteristic metrics: Gini coefficient, Common Part of Commuters (CPC), Visits per Location, Trip Distance, and PageRank, each normalized onto a common scale.
Case study — the framework applied to the Bangkok taxi trajectory dataset (November 2025, published as open data by the iTIC Foundation) across five spatial aggregation methods (S2, H3, Triangle, administrative boundaries, and Voronoi diagram) and multiple resolutions.
Interactive interface — a web-based visualization tool that lets analysts and decision-makers explore aggregated OD flow patterns and compare privacy-utility outcomes across configurations.

Interface features

The interface (privacy.html) is organized into an Explorer view and a Decision Support view:

Data Visualization — switch between Origin, Destination, Travel Demand, and OD Flow map layers.
Aggregation Method and Resolution — select among S2, H3, Triangle, Administrative, and Voronoi aggregations at multiple resolutions.
Privacy-preserving Method — choose k-anonymity or l-diversity and a target data retention percentage; the interface reports the resulting threshold (k or l) and the pass/fail rate of cells at that threshold.
Utility Score — a live chart of information loss across the five utility metrics for the selected configuration.
Temporal View — an OD heat-matrix comparing raw, privacy-preserved, and difference views across time of day and day of week.
Decision Support Panel — set a maximum acceptable utility-loss tolerance and get back the feasible aggregation/resolution/retention combinations that satisfy it.
English and Thai language support.

Maps are rendered client-side with Leaflet.js.

Repository structure

Fill in to match your actual layout, e.g.:

.
├── data/               # raw and processed OD datasets
├── framework/          # privacy and utility metric computation
├── interface/           # privacy.html and supporting frontend assets
├── notebooks/          # analysis notebooks used for the case study
└── README.md
Installation

Fill in your actual setup steps, e.g.:

bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
# install dependencies
# e.g. pip install -r requirements.txt
Usage

Fill in how to run the framework/pipeline and the interface, e.g.:

bash
# run the evaluation framework on a dataset
python framework/run_evaluation.py --config config.yaml

# launch the interactive interface locally
python -m http.server 8005
# then open http://localhost:8005/privacy.html

Data source

Bangkok taxi trajectory data (November 2025), published as open data by the iTIC Foundation, a Thai non-profit organization that collects and processes traffic data in Thailand.

Author

Suphaphong Sirinapaphan
