---
permalink: covid-19/ena-upload-container
toc: false
hide_sidebar: true
search_exclude: true
---

<div class="jumbotron jumbo">
    <div class="container">
        <table>
            <tbody>
                <tr>
                    <td>
                        <h1>Hello, your <strong>ENA-upload Galaxy</strong> container is running!</h1><br>
                        <p> This container is optimized to clean human reads from raw reads and to upload them to
                            ENA,
                            this in only a few steps. The ENA uploading is based on the tool ena-upload-cli while
                            the
                            reads cleaning tool is based on Metagen-FastQC workflow.
                        </p>
                    </td>
                    <td>
                        <div>
                            <img src="./images/welcome_elixir_logo.png" style="margin:10px; height:100px;">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

# ENA submission quick-start
{% include callout.html type="note" content="For more detailed information on the container and the ENA submission process read the documentation found on ELIXIR Belgium's [RDM Guide](https://rdm.elixir-belgium.org/covid-19/sarscov2_submission.html)" %}


## 1. Log in to Galaxy and load your ENA credentials:

1. Login to Galaxy using `admin` as username and `password` as password. This will give you full access to the galaxy instance.
2. Go to **User** > **Preferences** in the top navigation
3.  Click on <i class="fa fa-user" aria-hidden="true"></i> **Manage Information**
4. Fill in the `Your ENA Webin account details` (If you do not have one, get your ENA Webin account [here](https://www.ebi.ac.uk/ena/submit/sra/#registration))
5. Click **Save**


## 2. Upload Data
Upload your raw data using Galaxy's <i class="fa fa-upload"></i> upload tool found at the top right of the **Tools** panel or using **Upload File from your computer** under **Upload Data** tool group.

## 3. Filter human reads out of the raw reads
Filter human traces from your raw data using **Clean human reads from raw data** from the **Preprocessing Tools** on the left panel.

1. Select human h38 reference genome
2. Choose single or paired-end
3. Select the files to clean
4. Click on 'Execute'

## 4. Upload metadata and submit to ENA
The **ENA Upload tool** under **Submission tools** is used to generate the metadata in the right format, associate it with the sequence data files and submit everything to ENA. It is advisable to first test your submissions using the Webin test service where changes are not permanent and are erased every 24 hours.

The tool offers three ways of entering metadata for submission:
* Complete the [metadata spreadsheet template](https://github.com/ELIXIR-Belgium/ENA-metadata-templates/blob/main/templates/ERC000033/example_metadata_template_ERC000033.xlsx) and upload it as in step 2 or;
* Interactively generate the metadata structure or;
* Complete the 4 [tsv templates](https://github.com/ELIXIR-Belgium/ENA-metadata-templates/blob/main/templates/ERC000033/) and upload as in step 2.

After uploading or completing the metadata, select the corresponding (human traces removed) data files, fill in your affiliation and click on 'Execute'.


## 5. Check for a valid submission

Visit [Webin online](https://www.ebi.ac.uk/ena/submit/webin) to check on your submissions or [dev Webin](https://wwwdev.ebi.ac.uk/ena/submit/webin) to check on test submissions. If everything looks fine, publish the data by changing the "Release Date" of the study to a day later than the current day. It can take several days for ENA to index the data and to let it appear in a correct manner. Covid-19 data will also be indexed by the [COVID-19 Data Portal](https://www.covid19dataportal.org/)
