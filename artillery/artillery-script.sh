#!/usr/bin/env bash
artillery run-test --region eu-central-1 --cluster App-Runner-Test-Cluster --count 10 --launch-type ecs:fargate --config ./config/stress-test.yaml --environment 100-concurrent-user-stress-test --output ./10W-100VU-stress-a-report1.json ./scenarios/a.yaml
