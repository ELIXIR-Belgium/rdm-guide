---
title: European Nucleotide Archive (ENA)
keywords:
summary: Empty summary
permalink: ena.html
---
## ENA features
**How to submit data**\\
ENA allows [submissions via three routes](https://ena-docs.readthedocs.io/en/latest/submit/general-guide.html#), each of which is appropriate for a different set of submission types. You may be required to use more than one in the process of submitting your data.
1. Interactive Submissions.\\
This is often the most accessible submission route. It requires filling out web forms directly in your browser or alternatively downloading spreadsheets that can be completed off-line and uploaded to ENA.
2. Command Line Submissions (Webin-CLI).\\
This process requires command line skills.
3. Programmatic Submissions.\\
This process requires knowledge of XML format, HTTPS protocol and RFC1867.

**Non-Personal vs Personal data**\\
Non personal data only.

**Access to data**\\
[Open, Public](https://www.ebi.ac.uk/ena/browser/about/policies).

**Embargo**\\
Possible ([confidential phase](https://ena-docs.readthedocs.io/en/latest/faq/release/data-availability-policy.html?highlight=confidential)).

**Data licence**\\
Not specified. However, no use restrictions or licensing requirements will be included in any sequence data records, and no restrictions or licensing fees will be placed on the redistribution or use of the database by any party ([ENA Policies](https://www.ebi.ac.uk/ena/browser/about/policies)).

**Data/Experiments types**\\
Register:
* [Study](https://ena-docs.readthedocs.io/en/latest/submit/study.html#). A study (project) groups together data submitted to the archive, so it is the first step towards submitting your data to ENA.
* [Sample](https://ena-docs.readthedocs.io/en/latest/submit/samples.html). Each sample in ENA represents biomaterial that a sequencing library was produced from. A sample contains information about the sequenced source material, so it is important to first register your biological samples with ENA. Samples are typically associated with [checklists](https://www.ebi.ac.uk/ena/browser/checklists), which define the [metadata](metadata) fields used to annotate the samples.

Submit:
* [Raw reads](https://ena-docs.readthedocs.io/en/latest/submit/reads.html). Within ENA, raw reads are represented as the following submission objects:
  * *Experiment*: contains information (metadata) that describes the methods used to sequence the sample, including library and instrument details.
  * *Run*: is part of an experiment and refers to data files containing raw read generated in a run of sequencing.
* [Genome, transcriptome, metagenome or metatranscriptome assemblies](https://ena-docs.readthedocs.io/en/latest/submit/assembly.html). All assemblies are submitted as "analysis" submission objects (secondary analysis results derived from sequence reads). Further information about metagenome can be found [here](https://ena-docs.readthedocs.io/en/latest/faq/metagenomes.html) and [here](https://www.ebi.ac.uk/training/online/course/ebi-metagenomics-portal-submitting-metagenomics-da/what-type-metagenomic-data-can-i-submit--0).
* [Targeted sequences](https://ena-docs.readthedocs.io/en/latest/submit/sequence.html#). Short assembled and annotated sequences representing interesting features or gene regions. All targeted sequences are submitted as "analysis" submission objects.
* [Other analysis](https://ena-docs.readthedocs.io/en/latest/submit/analyses.html). Any secondary analyses that are not Assemblies or Targeted sequences.

**Metadata**
* Study: *Short name, Descriptive title, Abstract*.
* Sample: see what’s the best [sample checklists](https://www.ebi.ac.uk/ena/browser/checklists) to describe your samples. You can also [download the sample metadata schema as a spreadsheet](https://www.ebi.ac.uk/ena/submit/webin/sample-checklist).
* Raw reads: see metadata fields for [interactive](https://ena-docs.readthedocs.io/en/latest/submit/reads/interactive.html) and [Webin-CLI](https://ena-docs.readthedocs.io/en/latest/submit/reads/webin-cli.html) submission of raw reads.
* Assemblies: see [here](https://ena-docs.readthedocs.io/en/latest/submit/assembly.html#submission-options) the metadata required for each type of assembly.
* Targeted sequences: many types of sequence can be submitted using a checklist. Checklist submission allows you to avoid having to create the flatfile record manually. Therefore, please check the list of available [sequence checklists](https://ena-docs.readthedocs.io/en/latest/submit/sequence/annotation-checklists.html) to determine whether one of them meets the needs of your submission. You can also [download the sequence metadata schema as a spreadsheet](https://www.ebi.ac.uk/ena/submit/webin/sequence-checklist).
* Other analysis: see [here](https://ena-docs.readthedocs.io/en/latest/submit/analyses.html) the metadata required for each type of analysis.

**Ontology**\\
Repository-developed ontology or controlled vocabulary.
* Samples: use the [sample checklist portal](https://www.ebi.ac.uk/ena/submit/webin/sample-checklist) or see [here](https://www.ebi.ac.uk/ena/browser/checklists) to find the permitted terms in each metadata field of a sample checklist.
* Raw reads: see here the [permitted values](https://ena-docs.readthedocs.io/en/latest/submit/reads/webin-cli.html) in each metadata field required for describing raw reads.
* Assemblies: see [here](https://ena-docs.readthedocs.io/en/latest/submit/assembly.html#submission-options) the permitted terms for each type of assembly.
* Targeted sequences: use the [sequence checklist portal](https://www.ebi.ac.uk/ena/submit/webin/sequence-checklist) to find the permitted terms in each metadata field of a sequence checklist.
* Other analysis: see [here](https://ena-docs.readthedocs.io/en/latest/submit/analyses.html#submission-options) the permitted terms for each type of analysis.

**Data documentation**\\
ENA doesn’t allow upload of README file. All relevant information about the data (metadata) need to be provided in the designated fields. See “Metadata” section above.

**File format(s)**\\
Information about file formats accepted by ENA can be found [here](https://ena-docs.readthedocs.io/en/latest/submit/fileprep.html#). Accepted file formats for:
* [Raw reads](https://ena-docs.readthedocs.io/en/latest/submit/fileprep/reads.html).
* [Assemblies](https://ena-docs.readthedocs.io/en/latest/submit/fileprep/assembly.html).
* [Analysis](https://ena-docs.readthedocs.io/en/latest/submit/fileprep/flat-file-example.html).

**Data volume and costs**\\
No limit for data volume. No costs. [ENA Fair Use Policy](https://ena-docs.readthedocs.io/en/latest/submit/fileprep/preparation.html?highlight=volume#fair-use-policy).

**Data quality**\\
Beyond limited editorial control and some internal integrity checks, the quality and accuracy of the record are the responsibility of the submitting author, not of the database. The databases will work with submitters and users of the database to achieve the best quality resource possible (adapted from [ENA Policies](https://www.ebi.ac.uk/ena/browser/about/policies)).

**Identifiers**\\
All database records submitted to the ENA will remain permanently accessible as part of the scientific record. Corrections of errors and update of the records by authors are welcome and erroneous records may be removed from the next database release, but all will remain permanently accessible by **accession number** (adapted from [ENA Policies](https://www.ebi.ac.uk/ena/browser/about/policies)).

The top-level Project accession should be [cited](existing_data) as well as a link to where the data can be found in the browser, as shown in the example [here](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/accessions.html?highlight=accession#how-to-cite-your-ena-study).

## Tips for data submission
