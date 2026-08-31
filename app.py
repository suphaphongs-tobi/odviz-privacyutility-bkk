"""
Streamlit entry point for the Bangkok Privacy-preserved Mobility Explorer.

The explorer itself is a static HTML/CSS/JS site (Leaflet + Chart.js,
no build step) that lives under static/ and is served as-is by
Streamlit's static file server (see .streamlit/config.toml). This file
just embeds it full-width/full-height via an iframe so the project can
be deployed on Streamlit Community Cloud with a single entry point.
"""
import streamlit as st

st.set_page_config(
    page_title="Bangkok Privacy-preserved Mobility Explorer",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Hide Streamlit's own chrome (header/footer/padding) so the embedded
# site fills the viewport like a normal standalone page.
st.markdown(
    """
    <style>
      #MainMenu, header, footer { visibility: hidden; }
      .block-container { padding: 0 !important; max-width: 100% !important; }
      iframe { border: none; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.components.v1.iframe(src="app/static/privacy.html", height=1000, scrolling=True)
