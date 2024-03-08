---
title: ENA data submission toolbox
contributors: [Bert Droesbeke, Flora D'Anna] 
description: High scale publishing of data to ENA using easy to use metadata templates. 
training:
  - name: Screencast of the Galaxy ENA upload tool
    registry: YouTube
    url:
  - name: Galaxy Training network
    registry: 
    url:
---


## Introduction 

European Nucleotide Archive (ENA) is a fully open repository dedicated to storing raw sequencing data, assemblies, and annotation data. The ENA data submission toolbox simplifies the submission of sequence data, including raw reads and assembled sequences by offering a single-step submission process, a graphical user interface, tabular-formatted metadata and client-side validation, for every sample checklist supported at ENA.


## Its components

{% include image.html file="ena-submission-toolbox.svg" caption="<b>Figure 1.</b> Overview of the ENA submission toolbox components." %}


### ENA upload CLI

Command line tool allowing submission of raw reads data and respective metadata to ENA using tabular files or an excel sheet. Programmatically submit study, sample, run and experiment objects without the need of logging in to the ENA Webin interface. 

Key features:
- Submission of raw reads data and metadata
- Using tabular files or an excel sheet to easily capture the metadata
- Add, modify, cancel and release study, experiment, run and sample objects
- Safe credential management using a credentials file
- Client side validation using ENA checklists (samples) and official ENA XSD files (run, experiment and study)
- Can the provided tsv/xlsx templates to fill in the metadata

[<i class="fa-brands fa-github me-2"></i>Github](https://github.com/usegalaxy-eu/ena-upload-cli){: class="btn btn-primary rounded-pill"}
[<i class="fa-solid fa-download me-2"></i>Install using pip](https://pypi.org/project/ena-upload-cli/){: class="btn btn-primary rounded-pill"}

### Galaxy

[Galaxy](https://galaxyproject.org/eu/) is an open-source platform for FAIR data analysis that enables users to use tools from various domains through its graphical web interface.
Following tool wrappers make Galaxy your one stop shop for data preprocessing, analysing and submitting. Both tools can be installed through the Galaxy toolshed. Ask the administrator of you Galaxy instance if this is not yet the case.

#### Galaxy ENA upload tool

Galaxy tool wrapper of the ENA-upload-cli. Gives the command line tool a graphic user interface and adds support for interactive submissions. 

Key features:
- Graphical user interface making it easy to use
- Raw read submissions
- ENA-upload-cli wrapper
- Add and modify ENA objects
- User based credential management
- Possibility to set a brokering account
- Easy data upload/management
- Available @ useGalaxy.eu, .be and .au

[<i class="fa-solid fa-play me-2"></i>Use at useGalaxy.be](https://usegalaxy.be/?tool_id=toolshed.g2.bx.psu.edu%2Frepos%2Fiuc%2Fena_upload%2Fena_upload){: class="btn btn-primary rounded-pill"}
[<i class="fa-brands fa-github me-2"></i>Github](https://github.com/galaxyproject/tools-iuc/tree/master/tools/ena_upload){: class="btn btn-primary rounded-pill"}



#### Galaxy assembly submission tool

Galaxy wrapper to submit consensus sequences to ENA in an interactive way. The tool has the [Webin-CLI](https://github.com/enasequence/webin-cli) script of ENA as core and supports all sample checklists.

Key features:
- Interactive submission of the metadata
- Possibility to set a brokering account
- Easy data upload/management
- Available @ useGalaxy.be

[<i class="fa-solid fa-play me-2"></i>Use at useGalaxy.be](https://usegalaxy.be/?tool_id=toolshed.g2.bx.psu.edu%2Frepos%2Fieguinoa%2Fena_webin_cli%2Fena_consensus_submit){: class="btn btn-primary rounded-pill"}
[<i class="fa-brands fa-github me-2"></i>Github](https://github.com/usegalaxy-be/galaxytools/tree/main/consensus_sequence_ena_galaxy){: class="btn btn-primary rounded-pill"}


### Metadata templates

Tabular-format and xlsx spreadsheet metadata templates required to submit data to ENA using the ENA-upload-cli or GALAXY ENA upload tool. A GitHub Action is put in place to automatically keep these templates up to date with the ENA sample checklists.

Key features:
- GitHub repo hosting tsv and xlsx templates for every checklist
- GitHub Actions to keep up to date with ENA XSD/checklist files
- Versions in sync with the ones from ENA-upload-CLI

[<i class="fa-brands fa-github me-2"></i>Github](https://github.com/ELIXIR-Belgium/ENA-metadata-templates){: class="btn btn-primary rounded-pill"}

### Docker deployment

When you can not use the Galaxy instances @ useGalaxy.eu, .be and .au, possibly due to GDPR reasons, we also offer ready to use Docker containers. The  Docker container is shipped with the previously mentioned Galaxy tools and deploys locally a fully usable Galaxy instance. 

Key features:
- Easy deployment of a local Galaxy instance
- Developed during COVID-19
- Data stays on-premise until submission
- The Galaxy instance contains:
    - Tool to easily clean raw reads from human reads
    - ENA-upload tool
    - ENA Assembly submission tool
    - Workflows to perform SARS-CoV-2 analysis

[<i class="fa-brands fa-github me-2"></i>Github](https://github.com/ELIXIR-Belgium/ena-upload-container){: class="btn btn-primary rounded-pill"}

## Using DataHub to manage your metadata

{% include image.html file="datahub-to-ena.svg" caption="<b>Figure 2.</b> Submission flow of metadata from DataHub to ENA" %}

DataHub is a free and open platform for easier Research metaData Management in Life Science. Based on SEEK, it has an improved way of handling samples and the possibility to load sample templates for the creation of the metadata structure. This functionality is ideal for the creation of ENA specific metadata templates which guarantee the compatibility with the repository when a researcher is using the platform.

Key features:
- Research metadata management platform based on SEEK
- Leveraging the DataHub metadata templates
- Enforcing and promoting the ENA standards and checklists
- Existing ISA-JSON export function
- ISA-JSON as machine actionable metadata carrier

[<i class="fa-solid fa-play me-2"></i>Try out on DataHub](https://datahub-test.elixir-belgium.org/){: class="btn btn-primary rounded-pill"}


## Publication


