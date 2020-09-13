import React from 'react'


const FilterIssueForm = ({companies, carriers, ATICodes, getIssuesByFilter, setCompanyFilter, companyFilter, setCarrierFilter, carrierFilter, setATICodeFilter, ATICodeFilter}) => {

    let companiesOptions = companies.map(company => <option value={company}>{company}</option>)
    let carriersOptions = carriers.map(carrier => <option value={carrier}>{carrier}</option>)
    let ATICodesOptions = ATICodes.map(ATIcode => <option value={ATIcode}>{ATIcode}</option>)

    const startFilterIssues = () => {
        getIssuesByFilter(encodeURI(companyFilter), encodeURI(carrierFilter), encodeURI(ATICodeFilter))
    }

    return (
        <div>
            <div>Фильтр заявок</div>
            <div>
                по фирме:
                <select defaultValue={companyFilter}
                        onChange={(e) => {
                            setCompanyFilter(e.target.value)
                        }}>

                    <option value={''}></option>
                    {companiesOptions}
                </select>
            </div>
            <div>
                по перевозчику:
                <select defaultValue={carrierFilter}
                        onChange={(e) => {
                            setCarrierFilter(e.target.value)
                        }}>
                    <option value={''}></option>
                    {carriersOptions}
                </select>
            </div>
            <div>
                по ATI коду:
                <select defaultValue={ATICodeFilter}
                        onChange={(e) => {
                            setATICodeFilter(e.target.value)
                        }}>
                    <option value={''}></option>
                    {ATICodesOptions}
                </select>
            </div>
            <div>Поиск заявки</div>
            <button onClick={startFilterIssues}>Поиск по фильтру
            </button>
        </div>
    )
}

export default FilterIssueForm