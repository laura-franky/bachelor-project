# Performance Analyse einer skalierbaren Produktions-Webanwendung

## Bachelor Projekt zur Bachelor Arbeit

### Zusammenfassung

In Rahmen dieser wissenschaftlichen Arbeit wird die Performance einer skalierbaren Produktions - Webanwendung analysiert, welche mit Amazon Web Services App Runner betrieben wird. Der neue Cloud Service App Runner basiert auf Containerized Deployments, wobei die Bereitstellung einer Anwendung nun schnell und ohne Infrastrukturerfahrung erfolgen soll.
Um App Runner zu testen wird ein kleines beispielhaftes REST-Backend entwickelt, welches dann mit App Runner in Betrieb genommen wird. Dazu werden Tests konzipiert die es ermöglichen die Leistung von App Runner zu analysieren. Diese Tests laufen mit dem Testing-Tool artillery. Visualisiert wurden die Ergbnisse mit der python Bibliothek pandas.

### Inhalt

In diesem Repository sind alle Dateien zu finden die für die Erstellung der Bachelor Arbeit: Performance Analyse einer skalierbaren Produktions-Webanwendung, benötigt wurden. Es handelt sich dabei um die index.js mit der Anwendung, sowie die recipes.js mit den Beispiel Rezepten. Weiterhin ist hier die apprunner.yaml-Datei mit welcher diese Anwendung als App Runner Dienst in Betrieb genommen werden kann.

Zuletzt sind hier auch die Dateien, welche für die Durchführung der Performance Tests notwendig waren, im Ordner artillery zu finden. Dort sind die Konfigurationen und Szenarien die zum Testen verwendet wurden; der Ordner reports beinhaltet alle Ergebnisse der Tests, einmal als JSON- und als HTML-Datei.
Im Ordner pandas sind die Dateien zur Erstellung der Graphen zur Visualierung der Ergebnisse zu finden. Die Graphen wurden dort in Unterordnern export als PDF abgespeichert.
