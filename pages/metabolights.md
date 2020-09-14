---
title: MetaboLights
keywords:
summary: Empty summary
sidebar: mydoc_sidebar
permalink: metabolights.html
---
## ENA features
**How to submit data**\\
There are two possible ways to [submit data into MetaboLights](https://www.ebi.ac.uk/metabolights/help):
* Online Study Submission. This is the recommended submission method. Data submission is done online through a web-interface. A good starting point is the [video for step by step guide to create a MetaboLights study online](https://www.ebi.ac.uk/metabolights/help).
* ISAcreator tool. Step by step guide for this submission method can be found in the Quick tour section of [EMBL-EBI train online](https://www.ebi.ac.uk/training/online/course/metabolights-quick-tour/submitting-data-metabolights). This method requires the download and installation of the ISAcreator tool.

**Non-Personal vs Personal data**\\
Non-personal data (non-identifiable).

**Access to data**\\
Open access.

**Embargo**\\
Possible. A minimum of 28 days from submission to allow for manual curation of the study. A longer period may be selected.

**Data licence**\\
All data is governed by the [EMBL-EBI's Terms of use](http://www.ebi.ac.uk/about/terms-of-use/).

**Data/Experiments types**
* Mass Spectrometry (MS)
* NMR spectroscopy

**Metadata**
* Study: *title, summary/description, keywords*
* Assay: *technique and assay type*, both defined by controlled vocabulary. For each assay type a set of specific metadata will be required. Find [here](https://www.ebi.ac.uk/training/online/course/metabolights-quick-tour/submitting-data-metabolights) the specific metadata for each assay type.
* Protocol description: *sample collection, extraction, chromatography, MS, data transformation, metabolite identification*.
* Experimental control names
* Sample names
* Sample details: *organism, organism part, variant, custom factors/variable*. Controlled vocabulary is provided for each metadata field.
* Metabolite annotation: *database_identifier, chemical_formula,	smiles, inchi, metabolite_identification,	mass_to_charge,	fragmentation,	modifications,	charge,	retention_time,	taxid,	species,	database,	database_version,	reliability, uri,	search_engine	search_engine_score,	smallmolecule_abundance_sub,	smallmolecule_abundance_stdev_sub,	smallmolecule_abundance_std_error_sub*. Controlled vocabulary is provided for most of the metadata field.

**Ontology**\\
Many ontologies are embedded in the submission form. One of the used ontology is [EFO](https://www.ebi.ac.uk/ols/ontologies/efo). Additionally, MetaboLights recommends the use of [Bioportal](http://bioportal.bioontology.org/) to find or resolve any ontologies.

**Data documentation**\\
MetaboLights doesn’t allow upload of README file. All relevant information about the data need to be provided in the designated metadata fields.

**File format(s)**
* Accepted [raw file formats](https://www.ebi.ac.uk/metabolights/guides/study/Add_raw_data): eg. .raw, .d, .cdf, open source formats (.mzML, .nmrML).
* Study description (i_MTBLSxxx.txt).
* Sample information (s_MTBLSxxx.txt).
* Assay information (a_MTBLSxxx.txt).
* Metabolite information (m_MTBLSxxx.tsv).

**Data volume and costs**\\
No limit for data volume. No costs.

**Data quality**\\
MetaboLights submission process includes a **validation** and a **manual curation** steps. See [here](https://www.ebi.ac.uk/metabolights/guides/study/validations) for more details.

**Identifiers**\\
Unique accession numbers are minted for every study submitted.


## Guide and manual
https://www.ebi.ac.uk/metabolights/guides/study/overview

https://www.ebi.ac.uk/metabolights/help

## Tips for data submission
