---
title: Submission of SARS-Cov-2 assemblies to ENA
keywords: [covid-19, SARS-Cov-2, ENA, data-submission, viral genomesm, assemblies]
summary: A guide to submit SARS-Cov-2 assemblies to ENA.
permalink: covid-19/sarscov2_assembly_submission.html
---

{% include note.html content="The content is still under construction." %}

## General
This second part of the documentation explains how to run the COVID-19 analysis workflows to generate a consensus sequence and how to submit it to ENA.

## About Galaxy workflows
A workflow is a series of tools and dataset actions that run in sequence as a batch operation. Galaxy workflows can be annotated, viewed, shared, published, and imported. They ensure reproducibility of analyses. [Maier et al. (2001)](https://doi.org/10.1101/2021.03.25.437046) have produced Galaxy workflows for the analysis of Illumina WGS and amplicon as well as ONT amplicon SARS-CoV-2 data.
Workflows are found under the **workflow** tab in the top navigation and at the bottom of the tools menu.

<!--- Ignacio to fill with more info --->

## 7. Run the variation analysis workflow
There are currently four workflows for variation analysis that cater for different libraries/platform combinations:
* Illumina whole genome sequencing (WGS) paired-end (PE) or single-end (SE)
* Illumina amplicon (ARCTIC protocol) paired-end
* Oxford Nanopore amplicon (ARCTIC protocol)

If you have not already done so, upload your reads data as explained in [section 3](https://rdm.elixir-belgium.org/covid-19/sarscov2_submission.html#3.-Upload-data-to-Galaxy).
Go to the workflow section and select the variation analysis workflow suited for your data by clicking on <i class="fas fa-play fa-inverse" aria-hidden="true"></i>.
This brings up the workflow menu.
The ARCTIC variation analysis workflow requires:

* Your data as a collection of the forward and reverse reads in fastq format of all samples to be analyzed (Fig. 7a) - [how to make a collection in Galaxy](https://galaxyproject.org/tutorials/collections/)
* The SARS-CoV-2 reference FASTA sequence, included in the container (MN908947.3.fasta - (Fig. 7b))
* A BED file describing the binding sites of all primers used to generate the tiled amplicons (Fig. 7c). We include in the container the v3 primer scheme BED file (other versions can be obtained from the [ARTIC project repo](https://github.com/artic-network/artic-ncov2019/tree/master/primer_schemes/nCoV-2019))
* An amplicon info file. This tabular file should consist of one line per amplicon, which should list all primers involved in the generation of this amplicon (Fig. 7d). We include in the container the amplicon info for the v3 primer scheme (other versions can be obtained from the [ARTIC project repo](https://github.com/artic-network/artic-ncov2019/tree/master/primer_schemes/nCoV-2019)).

These necesary files are also found in [useGalaxy.eu](https://usegalaxy.eu/u/wolfgang-maier/h/covid-19-resources). The workflows to analyze whole genome sequencing (RNA-Seq) library-derived sequences do not require the last two files. The outputs of the variation analysis workflow are a alignment file (bam) collection (Fig. 8b), a report on the alignments (html - Fig. 8d) and a Variant Call File (vcf) collection (Fig. 8a). Both are needed to construct the consensus sequence.

{% include image.html file="variation_workflow.png" alt="variation_workflow" caption="Figure 7. The variation analysis workflow (ARCTIC Illumina PE)."%}

## 8. Run the consensus construction workflow
Go to the workflow section and select the Consensus Construction workflow. This workflow takes as input a Variant Call File (vcf) collection (Fig. 8a), an alignment file (bam) collection (Fig. 8b) and SARS-CoV-2 reference genome (Fig. 8c). The first two are produced by any of the variation analysis workflows described above in [section 7](https://rdm.elixir-belgium.org/covid-19/sarscov2_assembly_submission.html#7.-Run-the-variation-analysis-workflow) and are found in your history. The SARS-CoV-2 reference genome is included with the container and will also be found in your history.
Select the appropriate collections and files and **Run Workflow**.
This workflow outputs a consensus sequence collection as well as one multisample fasta with all the consensus sequences.


% include image.html file="consensus_builder.png" alt="consensus_workflow" caption="Figure 8. The consensus construction workflow."%}

## 9. Submit consensus sequence to ENA
Open the consensus sequence submission tool
This tool requires a fasta file (single submission) or a multi-fasta file (multiple submissions) as well as the associated metadata.


#### Metadata

In most cases, the **Assembly type** will be *Isolate* and **Molecule type** will be either *genomic RNA* or viral *cRNA*, depending on your library preparation strategy.


If the consensus was generated using the Galaxy workflows described in [section 7](https://rdm.elixir-belgium.org/covid-19/sarscov2_assembly_submission.html#7.-Run-the-variation-analysis-workflow) and [8](https://rdm.elixir-belgium.org/covid-19/sarscov2_assembly_submission.html#8.-Run-the-consensus-construction-workflow), then the **Assembly program** and **Coverage** metadata can be found in the alignment report (html) file Fig. 8d.

{% include important.html content="**Study** and **Sample** accession numbers are needed to submit consensus sequences to ENA" %}

You can choose to input the rest of the metadata interactively or if the reads were submitted using the [Galaxy reads submission tool](https://rdm.elixir-belgium.org/covid-19/sarscov2_submission.html#5.-Upload-metadata-and-submit-to-ENA), a metadata ticket was produced that contains most of the metadata needed to submit consensus sequences to ENA, including **Study** and **Sample** accession numbers. This metadata is linked to the consensus sequences by the original reads filename and can be parsed to extract the metadata associated with the reads/consensus.

<!---Figure 8 here with submission tool options  --->

Visit [Webin online](https://www.ebi.ac.uk/ena/submit/webin) to check on your submissions or [dev Webin](https://wwwdev.ebi.ac.uk/ena/submit/webin) to check on test submissions as explained in [section 6](https://rdm.elixir-belgium.org/covid-19/sarscov2_submission.html#6.-Check-for-a-valid-submission)


## 10. Stopping and deleting the container (optional)

The container can be stopped by simply closing the terminal. In this case the container will still be there. If your submission was successful and you don't need the instance anymore, you can delete the container and its corresponding image using following steps:

1. Check the name of your container you want to delete
    ```
    docker container list -a
    ```
2. Delete the container using its name (seen in the NAMES column)
    ```
    docker container rm NAME
    ```
3. Delete the image (when you don't want to use the galaxy instance in the foreseeable future)\\
    **Linux/Windows:**
    ```
    docker rmi quay.io/galaxy/ena-upload
    ```If the reads were submitted using the Galaxy reads submission tool, a metadata ticket was produced that contains most of the metadata needed to submit consensus sequences to ENA.

    **MacOS:**
    ```
    docker rmi quay.io/galaxy/ena-upload:hg38
    ```

## Frequently asked questions

#### Why is the reads cleaning tool not showing files for input?
You have uploaded sequence files, they appear in your history but you do not see them in the human reads cleaning tool. This issue is related to the sequence file format. If you uploaded uncompressed fastq files, you have to define the files as fastqsanger in Galaxy for the tool to accept them. This can be done during upload or by editing the file attributes in the history panel. More information of fastqsanger format can be found [here](https://galaxyproject.org/support/fastqsanger/)

#### Why do my outputs from reads cleaning have no sequence?
The output of the read cleaning tool is a small file (40Kb) with no sequences. This issue can be related to memory requirements.
The human reads cleaning tool uses [BWA Mem](http://bio-bwa.sourceforge.net/) for mapping reads to the human genome. This step is memory demanding.
A modestly specced workstation may become laggy and not finish the mapping step, resulting in no output sequence file. Increasing the swap file or swap partition size can help with this issue.

#### I Have "page not found" when visiting [http://localhost:8080/](http://localhost:8080/), what do I do?

Please wait a little longer. If the problem keeps occurring, please press ctrl-c to break the container startup and try again.

#### Why are no reference genomes available in the read cleaning tool?
If this problem occurs, pleas try using the docker container that has the human reference genome pre-included by using following command:

```
docker run -p "8080:80" quay.io/galaxy/ena-upload:hg38
```

#### Is my session lost after closing the terminal?
If you close the terminal, the container will be stopped, but will not be deleted. If you want to re-use this Galaxy session please run:

**Linux/Windows:**
```
docker start quay.io/galaxy/ena-upload
```

**MacOS:**
```
docker start quay.io/galaxy/ena-upload:hg38
```

#### Running the containers is taking a lot of storage space, is this normal?
If you are playing around with containers you might run into the fact that they can take up a lot of storage space. This can be avoided by deleting all your existing containers/images and volumes if you don't need them anymore. Use following commands to do so:

- Delete all containers /images and networks that are not in use
    ```
    docker system prune -a
    ```

- Delete volumes
    ```
    docker volume rm $(docker volume ls -qf dangling=true)
    ```
