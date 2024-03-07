---
title: ENA data submission toolbox
contributors: [Bert Droesbeke, Flora D'Anna] 
description: High scale publishing of data to ENA using easy to use metadata templates. 
training:
  - name: Screencast of the Galaxy ENA upload tool
    registry: YouTube
    url:
# More information on how to fill in this metadata section can be found here https://www.infectious-diseases-toolkit.org/contribute/page-metadata
---


## Introduction 

The (ENA) data submission toolbox simplifies the submission of sequence data, including raw reads and assembled sequences, for researchers. European Nucleotide Archive (ENA) is a fully open repository dedicated to storing raw sequencing data, assemblies, and annotation data.
Whether you're an experienced bioinformatician or a researcher with limited informatics background, our tools and workflows should help you in the submission process of both metadata and data to ENA.

## Its components

{% include image.html file="ena-submission-toolbox.svg" caption="<b>Figure 1.</b> Overview of the ENA submission toolbox components." %}


### ENA upload CLI

Command line tool allowing submission of raw reads data and respective metadata to ENA using tabular files or an excel sheet. Programmatically submit study, sample, run and experiment objects without the need of logging in to the ENA Webin interface. [Documentation can be found here](https://github.com/usegalaxy-eu/ena-upload-cli)

- Submission of raw reads data and metadata
- Using tabular files or an excel sheet to easily capture the metadata
- Add, modify, cancel and release study, experiment, run and sample objects
- Safe credential management using a credentials file
- Client side validation using ENA checklists (samples) and official ENA XSD files (run, experiment and study)
- Can the provided tsv/xlsx templates to fill in the metadata

### Galaxy

[Galaxy](https://galaxyproject.org/eu/) is an open-source platform for FAIR data analysis that enables users to use tools from various domains through its graphical web interface.
Following tool wrappers make Galaxy your one stop shop for data preprocessing, analysing and submitting.

- **Galaxy ENA upload tool**

    Galaxy tool wrapper of the ENA-upload-cli. Gives the command line tool a graphic user interface and adds support for interactive submissions. 
    [Tool at IUC](https://github.com/galaxyproject/tools-iuc/tree/master/tools/ena_upload).

    - Graphical user interface making it easy to use
    - Raw read submissions
    - ENA-upload-cli wrapper
    - Add and modify ENA objects
    - User based credential management
    - Possibility to set a brokering account
    - Easy data upload/management
    - Available @ useGalaxy.eu, .be and .au

- **Galaxy assembly submission tool**

    Galaxy wrapper to submit consensus sequences to ENA in an interactive way. The tool has the [Webin-CLI](https://github.com/enasequence/webin-cli) script of ENA as core and supports all sample checklists. [More information](https://github.com/usegalaxy-be/galaxytools/tree/main/consensus_sequence_ena_galaxy).


### Metadata templates

Tabular-format and xlsx spreadsheet metadata templates required to submit data to ENA using the ENA-upload-cli or GALAXY ENA upload tool. A GitHub Action is put in place to automatically keep these templates up to date with the ENA sample checklists.[Discover the templates here](https://github.com/ELIXIR-Belgium/ENA-metadata-templates)

- GitHub repo hosting tsv and xlsx templates for every checklist
- GitHub Actions to keep up to date with ENA XSD/checklist files
- Versions in sync with the ones from ENA-upload-CLI



### Docker deployment

When you can not use the Galaxy instances @ useGalaxy.eu, .be and .au, possibly due to GDPR reasons, we also offer ready to use Docker containers. The  Docker container is shipped with the previously mentioned Galaxy tools and deploys locally a fully usable Galaxy instance. 
[More information on how to use the Docker solution](https://github.com/ELIXIR-Belgium/ena-upload-container).

- Easy setup of a local Galaxy instance
- Developed during COVID-19
- The Galaxy instance contains:
    - Tool to easily clean raw reads from human reads
    - ENA-upload tool
    - ENA Assembly submission tool
    - Workflows to perform SARS-CoV-2 analysis


## Using DataHub to manage your metadata

- Research metadata management platform based on SEEK
- Leveraging the DataHub metadata templates
- Enforcing and promoting the ENA standards and checklists
- Existing ISA-JSON export function
- ISA-JSON as machine actionable metadata carrier


{% include image.html file="datahub-to-ena.svg" caption="<b>Figure 2.</b>Submission flow of metadata from DataHub to ENA" %}

