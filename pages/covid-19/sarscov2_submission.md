---
title: Submission of SARS-Cov-2 DNA sequences to public repositories
keywords: covid-19, SARS-Cov-2, ENA, data-submission, viral sequences
summary: A guide to submit SARS-Cov-2 sequence data to different repositories.
---

## Submitting SARS-Cov-2 DNA sequences to public repositories
ELIXIR Belgium has developed a tool for submission of SARS-Cov-2 genetic sequences and associated metadata to public repositories, namely the European Nucleotide Archive and GISAID.
The tool is packaged in a Galaxy container. It can be run locally or via ELIXIR Belgium’s  Covid-19-dedicated Galaxy instance. {%}(link?)%} A very [short introduction to Galaxy](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html) is recommended for users unfamiliar with the platform.

## The container
The Galaxy container has tools to clean raw reads and upload them to ENA. The ENA uploading is based on the tool [ena-upload-cli](https://github.com/usegalaxy-eu/ena-upload-cli) which is wrapped in a [Galaxy tool](https://testtoolshed.g2.bx.psu.edu/repository?repository_id=e6d3d594449ee3f8).
Instructions for building and running the container locally are found in the tool's  [github repository](https://github.com/ELIXIR-Belgium/ena-upload-container).

## ELIXIR Belgium Covid-19 Galaxy instance
ELIXIR Belgium developed and maintains usegalaxy.be/covid-19 for the purpose of submitting SARS-Cov-2 genetic sequences to public repositories. At the moment, submissions to ENA are supported.


## Submission to ENA
### Data upload
Raw data is uploaded using Galaxy upload tool:

{% include image.html file="galaxy_data_upload.png" alt="Jekyll" caption="Glaxaxy data ENA upload" %}

There are different options for uploading data:
- Load by "browsing" for a local file. Best for small datasets. Some servers will support load data that is 2 GB or larger. If you are having problems with this method, try FTP.
- Load using an HTTP URL or FTP URL.
- Load a few lines of plain text.
- Load using FTP. Either line command or with a desktop client.

More information on data upload to Galaxy can be found in [Galaxy support](https://galaxyproject.org/support/loading-data/).

### Filter human reads
In order to comply with Europe’s General Data Protection Regulation [(GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en), traces of human genetic information must be removed from the raw data before submitting it to ENA. A tool is included that filters out reads that map to the human genome using [Metagen-FastQC](https://github.com/Finn-Lab/Metagen-FastQC).

### Metadata
Submission to ENA requires accompanying metadata that complies with the [ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html).
The tool offers two ways of entering metadata for submission: interactively or via a metadata template. All metadata fields must be completed for the submission to go through.



### Interactive metadata upload
For a small number of submissions, metadata is best entered interactively by completing all the boxes. Metadata fields are nested according to ENA metadata model:
- **Study**
- **Sample**
- **Experiment**
- **Run**

At the bottom, select the files associated with the metadata.

{% here we can have screenshots of each metadata section%}

### Bulk metadata upload
For submission of a large number of files, a metadata template is available with the container. The template can be downloaded, completed and uploaded using the Galaxy upload tool.

{% include table or link to table explaining all metadata fields. Use the same in Galaxy (include table at bottom) %}
