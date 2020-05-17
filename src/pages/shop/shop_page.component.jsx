import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';



import './shop_page.style.scss'
import CollectionPage from '../collection/collection.component';

const ShopPage=({match})=>{ 
        console.log(match);
        
        
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route  path={`${match.path}/:catageoryId`} component={CollectionPage}/>

            
            </div>
        )
    }

export default ShopPage;