import React from 'react'
import CSVReader from 'react-csv-reader'

const CatalogJob = () => {
    return(
        <div>
            <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
        </div>
    )
}

export default CatalogJob;