---
title: "Maritime Sentinel Platform"
summary: "End-to-end data platform for maritime surveillance — real-time AIS ingestion, anomaly detection, trajectory forecasting, and non-cooperative vessel identification."
summaryEs: "Plataforma de datos end-to-end para vigilancia marítima — ingesta AIS en tiempo real, detección de anomalías, predicción de trayectorias e identificación de embarcaciones no cooperativas."
date: "Jan 1 2024"
draft: true
tags:
  - Data Engineering
  - ML
  - Geospatial
  - Defense
---

## Overview

The Maritime Sentinel Platform is an end-to-end data system for maritime surveillance and situational awareness. It integrates real-time AIS (Automatic Identification System) data ingestion with advanced analytics to support maritime domain awareness in critical and defense-grade operational environments.

## Key Components

- **Real-time AIS Ingestion**: Streaming pipeline for high-volume vessel position reports built on Apache Kafka and Apache Spark Structured Streaming.
- **Anomaly Detection**: ML-based identification of atypical vessel behaviors including AIS spoofing, loitering, and unexpected route deviations.
- **Trajectory Forecasting**: Time-series models for predicting vessel paths and estimated arrival times.
- **Non-cooperative Vessel Identification**: Fusion of AIS tracks with ancillary sensor data to flag vessels operating without transponders.

## Architecture

The platform follows a lambda architecture pattern: a speed layer handles real-time event processing with sub-second latency targets, while a batch layer computes enriched features and model retraining pipelines over Delta Lake.

Geospatial outputs are served via pygeoapi and rendered on a MapLibre frontend for operational analyst dashboards.

## Status

Currently in active development.
