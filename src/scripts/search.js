let resultIDs = []
const searchSVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='22'  viewBox='0 0 22 22'%3E%3Cpath d='M20.5312 18.8438L15.8438 14.1562C16.8984 12.5938 17.4453 10.6406 17.1719 8.53125C16.6641 4.9375 13.7344 2.04688 10.1797 1.57812C4.86719 0.914062 0.375 5.40625 1.03906 10.7188C1.50781 14.2734 4.39844 17.2031 7.99219 17.7109C10.1016 17.9844 12.0547 17.4375 13.6562 16.3828L18.3047 21.0703C18.9297 21.6562 19.9062 21.6562 20.5312 21.0703C21.1172 20.4453 21.1172 19.4688 20.5312 18.8438ZM4.08594 9.625C4.08594 6.89062 6.3125 4.625 9.08594 4.625C11.8203 4.625 14.0859 6.89062 14.0859 9.625C14.0859 12.3984 11.8203 14.625 9.08594 14.625C6.3125 14.625 4.08594 12.3984 4.08594 9.625Z' %3E%3C/path%3E%3C/svg%3E";

const moreButton = (type) => {
    const button = document.createElement('button');
    button.classList.add('more');
    button.setAttribute('type', 'button');
    button.addEventListener("click",  () => {
        const parentNode = document.getElementById(type);
         [...parentNode.children].forEach(element => {
            element.style.display = 'flex'
         });
         button.style.display = 'none';
    });

    const counter = facets[type].length-5;
    button.textContent = `Ещё ${counter} `;
    return button
}
window.onload = function () {

    const filter = document.querySelector('[data-filter]')
    filter.dataset.filter === 'hidden';

    const params = getParams()
    const q = params.search
    const topics = params.topics
    const types = params.types.map(type => {return 't-'+ type})
    const systems = params.systems.map(type => {return 's-'+ type})
    const regions = params.regions.map(type => {return 'r-'+ type})
    const owners = params.owners.map(type => {return 'o-'+ type})
    const contents = params.contents.map(type => {return 'c-'+ type})
    const countries = params.countries.map(type => {return 'C-'+ type})

    const searchElement = document.getElementById('search');
    if(q && q.length > 0  && searchElement !== null){
        searchElement.style.background= 'none'
        searchElement.value = q
    }
    else{
        searchElement.style.background= `#fff url("${searchSVG}") no-repeat right center`
    }

    const topicsNode = document.getElementById('topics');
    if(topics && topics.length > 0 && topicsNode !== null){
        const topicsInputs = topicsNode.querySelectorAll('input');
        [...topicsInputs].map(node => {
            if(topics.includes(node.id)){
                node.checked = true;
            }
        })
    }

    for (let i = 0; i < topicsNode.children.length; i++) {
        if(i > 4){
            topicsNode.children[i].style.display ='none'
        }
    }
    topicsNode.append(moreButton('topics') )

    const typesNode = document.getElementById('types');
    if(types && types.length > 0 && typesNode !== null){
        const typesInputs = typesNode.querySelectorAll('input');
        [...typesInputs].map(node => {
            if(types.includes(node.id)){
                node.checked = true;
            }
        })
    }
    for (let i = 0; i < typesNode.children.length; i++) {
        if(i > 4){
            typesNode.children[i].style.display ='none'
        }
      }
    typesNode.append(moreButton('types'))

    const systemsNode = document.getElementById('systems');
    if(systems && systems.length > 0 && systemsNode !== null){
        const systemsInputs = systemsNode.querySelectorAll('input');
        [...systemsInputs].map(node => {
            if(systems.includes(node.id)){
                node.checked = true;
            }
        })
    }
    for (let i = 0; i < systemsNode.children.length; i++) {
        if(i > 4){
            systemsNode.children[i].style.display ='none'
        }
    }
    systemsNode.append(moreButton('systems'))

    const regionsNode = document.getElementById('regions');
    if(regions && regions.length > 0 && regionsNode !== null){
        const regionsInputs = regionsNode.querySelectorAll('input');
        [...regionsInputs].map(node => {
            if(regions.includes(node.id)){
                node.checked = true;
            }
        })
    }
    for (let i = 0; i < regionsNode.children.length; i++) {
        if(i > 4){
            regionsNode.children[i].style.display ='none'
        }
    }
    regionsNode.append(moreButton('regions'))

    const ownersNode = document.getElementById('owners');
    if(owners && owners.length > 0 && ownersNode !== null){
        const ownersInputs = ownersNode.querySelectorAll('input');
        [...ownersInputs].map(node => {
            if(owners.includes(node.id)){
                node.checked = true;
            }
        })
    }
    for (let i = 0; i < ownersNode.children.length; i++) {
        if(i > 4){
            ownersNode.children[i].style.display ='none'
        }
    }
    ownersNode.append(moreButton('owners'))

    const contentsNode = document.getElementById('contents');
    if(contents && contents.length > 0 && contentsNode !== null){
        const contentsInputs = contentsNode.querySelectorAll('input');
        [...contentsInputs].map(node => {
            if(contents.includes(node.id)){
                node.checked = true;
            }
        })
    }
    for (let i = 0; i < contentsNode.children.length; i++) {
        if(i > 4){
            contentsNode.children[i].style.display ='none'
        }
    }
    contentsNode.append(moreButton('contents'))

    const countriesNode = document.getElementById('countries');
    if(countries && countries.length > 0 && countriesNode !== null){
        const countriesInputs = countriesNode.querySelectorAll('input');
        [...countriesInputs].map(node => {
            if(countries.includes(node.id)){
                node.checked = true;
            }
        })
    }

    filterParams()
}
const getParams = () => {
    const url = new URLSearchParams(document.location.search)
    return {
        search: url.get("q"),
        topics: url.getAll("topic"),
        types: url.getAll("type"),
        systems: url.getAll("system"),
        regions: url.getAll("region"),
        owners: url.getAll("owner"),
        contents: url.getAll("content"),
        countries: url.getAll("country"),
    }
}


const handleParam = (event, param) => {
    if(event.checked){
        updateQS({key: param, value: event.value});
    }
    else{
        deleteQS({key: param, value: event.value});
    }
    setTimeout(() => {
        filterParams()
    }, 50);
};

const searchResults = (searchString) => {
    const allResults = Array.from(document.getElementsByClassName("result"));
    Array.from(allResults).forEach(element => {
       console.log(element.c,searchString);
    });
}
const hideCalculatedResults = (element) => {
    if([...element.children][2]){
        [...element.children][2].remove()
    }
}
const showCalculatedResults = (element) => {
    const word1 = declOfNum(resultIDs.length, ['источник', 'источника', 'источников']);
    const word2 = declOfNum(resultIDs.length, ['Найден', 'Найдено', 'Найдено']);
    const title = `${word2} ${resultIDs.length} ${word1}`;
    const tooltipWrap = document.createElement("div");
    tooltipWrap.className = 'tooltip';
    tooltipWrap.appendChild(document.createTextNode(title));
    if( element && [...element.children].length < 3 && [...element.children][0].checked){
        element.appendChild(tooltipWrap);
    }
}
const matchResults = (ids) => {
    const allResults = Array.from(document.getElementsByClassName("result"));
    Array.from(allResults).forEach(element => {
        if(!ids.includes(element.id)){
            document.getElementById(element.id).style.display = 'none';
        }
        else{
            document.getElementById(element.id).style.display = 'inline-block';
        }
    });
}
const resetResults = () => {
    resultIDs = catalogs.map(catalog => {return catalog.id})
    matchResults(resultIDs)
}
const filterParams = () => {
    const params = getParams()
    const filterNames = Object.keys(params).filter(name => {return name !== 'search'})
    let matchingIds = []
    filterNames.forEach(filterName => {
       if(params[filterName].length > 0){
        matchingIds.push( mapFacetIdsToCatalogs(filterName, params[filterName]))
       }
    });
    if(matchingIds.length > 0){
        resultIDs = intersectMany(matchingIds)
        matchResults(resultIDs);
    }
    else{
        resetResults(catalogs.map(item => {return item.id}))
    }
    if(params.search !== null){
        const matchingCatalogs = matchingIds.length > 0 ? catalogs.filter(catalog => {
            if(matchingIds.flat().includes(catalog.id )){
                return catalog
            }
        }) : catalogs

        resultIDs = matchingCatalogs.filter( catalog => {
            return catalog.name.toLowerCase().includes(params.search.toLowerCase())
        }).map(item => item.id)
        matchResults(resultIDs);
    }
}
const mapFacetIdsToCatalogs = (facetName, ids) => {
    const catalogIdByFacet = facets[facetName].reduce((acc, facet) => {
        if(ids.includes(facet.id)){
            acc.push(facet.CatalogRecords);
        }
        return acc
    }, [])
    return catalogIdByFacet.flat()
}


const onSearch = (event) => {
    if(event.target.value.length === 0){
        deleteQS({key: 'q', value: ''});
        event.target.style.background = `transparent url("${searchSVG}") no-repeat right center`
        filterParams()
    }
    else{
        event.target.style.background = '#fff';
        updateQS({key: 'q', value: event.target.value});
    }
    debounce(filterParams(), 250)
}
const updateQS = ({key, value}) => {
    const url = new URL(location.href);
    switch (key) {
        case 'topic':
        case 'type':
        case 'system':
        case 'region':
        case 'owner':
        case 'content':
        case 'country':
            url.searchParams.append(key, value);
            break
        default:
            url.searchParams.set(key, value);
            break
    }
    history.pushState(null, '', url);
}
const deleteQS = ({key, value}) => {
    const params = new URLSearchParams(document.location.search)
    if(key === 'q'){
        params.delete(key);
    }
    const newURL = new URL(document.location.origin);
    params.forEach((v, k) => {
        if (v !== value){
            newURL.searchParams.append(k, v)
        }
    });
    history.pushState(null, '', newURL);
}

