---
title: PRoteomics IDEntifications (PRIDE)
---
## PRIDE features
### How to submit data
PRIDE established and is part of [ProteomeXchange (PX)](http://www.proteomexchange.org) consortium of Mass Spectrometry (MS) proteomics resources, with the overall aim of standardizing data submission and dissemination of proteomics data worldwide.

The current way of submitting data to PRIDE is following the PX consortium’s guidelines. The main tool to submit data is the [PX Submission Tool](https://www.ebi.ac.uk/pride/help/archive/submission). Here you can find [PRIDE Resources Documentation](https://www.ebi.ac.uk/pride/markdownpage/documentationpage) and [training material](https://www.ebi.ac.uk/training/online/course/proteomexchange-submissions-pride).

There are two types of submissions to PRIDE (or to any other ProteomeXchange resource):
* **Complete Submissions.** A complete submission ensures that the processed results (at least the identification data) and the corresponding mass spectra can be parsed, integrated and visualised by PRIDE, connecting the identification data to the corresponding mass spectra. To achieve that, **processed identification results need to be provided in a PSI open standard format (either mzIdentML or mzTab)**.\\
Examples include bottom-up [DDA datasets](https://www.creative-proteomics.com/blog/index.php/data-dependent-acquisition-and-data-independent-acquisition-mass-spectrometry/) where identification results were generated from any tool that can export the data standard mzIdentML (and the corresponding peak list files, see below).
* **Partial Submissions.** In this case processed identification results are provided in other data formats than the ones indicated above for complete submissions. For PRIDE, it is then not possible to parse, integrate and visualise the identification and/or connect the processed results to the corresponding mass spectra. However, all the submitted files are made available to download. This mechanism allows data generated from any software that cannot export yet to the supported formats, or from less-mature/novel proteomics experimental approaches to be deposited in PRIDE.\\
Examples include bottom-up [DDA datasets](https://www.creative-proteomics.com/blog/index.php/data-dependent-acquisition-and-data-independent-acquisition-mass-spectrometry/) where identification results were generated from any tool that cannot export the PSI data standards mzIdentML or mzTab, or other datasets coming from approaches where no open standard for the results currently has been implemented (e.g. top-down proteomics).


### Non-Personal vs Personal data
Non-personal data (non-identifiable).

### Access to data
PRIDE follows [EMBL-EBI terms of use](https://www.ebi.ac.uk/about/terms-of-use/) for data access. EMBL-EBI itself places no additional restrictions on the use or redistribution of the data available via its online services other than those provided by the original data owners. The original data may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual property rights, biodiversity-related access and benefit-sharing rights.

### Embargo
Possible. By default, your data will be made publicly available after your manuscript has been accepted, or when PRIDE receives your instructions to do so. While PRIDE may also receive acceptance notifications from some journals, all submitters should notify it separately. Submitters can apply for a 6-month extraordinary extension ([PRIDE Post-submission steps](https://www.ebi.ac.uk/pride/markdownpage/submitdatapage#post-submission_steps)).

### Data licence
PRIDE has no default license type, it follows [EMBL-EBI terms of use](https://www.ebi.ac.uk/about/terms-of-use).

### Data/Experiments types
* Top-down proteomics
* Shotgun proteomics
* Gel-based proteomics
* Cross-Linking (CX-MS)
* Affinity-purification (AP-MS)
* SRM-MRM
* SWATH-MS (Data-independent acquisition)
* PAcIFIC (Data-independent acquisition)
* All-ion fragmentation (Data-independent acquisition)
* HDMSE (Data-independent acquisition)
* MS imaging
* MSE (Data-independent acquisition)
* RNA mass-spectrometry


### Metadata
The dataset has to be annotated with the following: *project title, keywords, project description, sample processing protocol and data processing protocol*.\\
Additional metadata needs to be provided for each ‘RESULT’ file. The following additional metadata is mandatory for both types of submission:
* *Species*: the species of the samples used in a given dataset.
* *Tissue*: tissue (“not applicable” should be used in case other types of experiments are performed).
* *Instrument information* (mass spectrometer).
* Incomplete submissions also require a list of *post-translational modifications (PTMs)* present in the dataset.
* Optional metadata fields are *cell type, disease and quantification method*.
The full description of PX XML XSD (XML Schema Definition) is found [here](http://proteomecentral.proteomexchange.org/schemas/proteomeXchange-1.4.0.html).


### Ontology
Controlled vocabulary is provided for each metadata field and a link to the [Ontology Lookup Service](https://www.ebi.ac.uk/ols/index) is also available.
* [PSI Mass Spectrometry Ontology
 (MS)](https://www.ebi.ac.uk/ols/ontologies/ms): structured controlled vocabulary for the annotation of mass spectrometry experiments. Developed by the HUPO Proteomics Standards Initiative.
* [PSI protein modification ontology
(PSI-MOD)](https://www.ebi.ac.uk/ols/ontologies/mod): protein chemical modifications, classifying protein modifications either by the molecular structure of the modification, or by the amino acid residue that is modified.
* New Taxonomy Portal (NEWT): organisms are classified in a hierarchical tree structure, to specify the sample species used in the experiments.
* [BRENDA tissue / enzyme source (BTO)](https://www.ebi.ac.uk/ols/ontologies/bto): a structured controlled vocabulary for the source of an enzyme. It comprises terms of tissues, cell lines, cell types and cell cultures from uni- and multicellular organisms.
* [Gene Ontology (GO)](https://www.ebi.ac.uk/ols/ontologies/go): gene product characteristics and gene product annotation data.

### Data documentation
PRIDE doesn’t allow upload of README file. All relevant information about the data need to be provided in the designated metadata fields.

### File format(s)
PRIDE XML is the internal data format and submission format of PRIDE. You can find the schema documentation [here](http://ftp.pride.ebi.ac.uk/pride/resources/schema/pride/doc/pride.html).

Several files are required for a PRIDE submission:
* “RAW” (Mandatory): original proprietary files provided by the instruments used in the study (e.g. Thermo RAW).
* “SEARCH” (Mandatory for Partial Submissions, Optional for Complete Submissions): files from the software analysis tool (e.g. .dat from Mascot).
* “RESULT” (Mandatory for Complete Submissions): standard file formats from HUPO-PSI to report peptide/protein identification and quantification results: mzIdentML and mzTab.
* “PEAK” (Mandatory for Complete Submissions, Recommended for Partial Submissions): the peak list files contains the set of MS/MS peaks used for peptide/protein identification (e.g. mgf Mascot generic files).
* “FASTA” (Optional): the search protein database used to perform the analysis (e.g. Uniprot Reference Proteome FASTA file).
* “SPECTRUM_LIBRARY” (Optional): spectrum libraries used to perform spectrum search.
* “GEL” (Optional): image files with the gels of the experiment.
* “PARAMETERS_FILE” (Optional): the parameters file contains information about the parameters that where used to perform the experiment (e.g. MaxQuant param file).
* “OTHER” (Optional): additional files that have been used to perform the experiment.

A complete description of file formats can be found [here](https://www.ebi.ac.uk/pride/markdownpage/pridefileformats).

### Data volume and costs
No limit for data volume. No costs.

### Data quality
[PRIDE Archive Identification Results](https://www.ebi.ac.uk/pride/markdownpage/resultpage#).

### Identifiers
After the submission, you will be issued with not only a ProteomeXchange accession number but also with a permanent [DOI (Digital Object Identifier)](identifiers) to uniquely identify your dataset in the future.

## Guide and manual
How to submit data to PRIDE. *PRIDE Resources Documentation* <https://www.ebi.ac.uk/pride/markdownpage/submitdatapage#how_to_submit_data>.

PRIDE Submission Tool. *PRIDE Resources Documentation* <https://www.ebi.ac.uk/pride/markdownpage/pridesubmissiontool>.

<!-- http://www.proteomexchange.org/docs/guidelines_px.pdf -->


<!-- ## Tips for data submission -->
