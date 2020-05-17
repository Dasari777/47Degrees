import React from 'react';
import MenuItem from '../menu_items/menu-items.components';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect'
import './directory.style.scss';

import {connect} from 'react-redux';
const  Directory =({sections})=>{  
  
        return(
            <div className='directory-menu'>
                {
                  sections.map(({id, ...otherprops})=>
                    (<MenuItem  key={id} {...otherprops}/>)
                )
                }

            </div>
            
        )
    }


const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)( Directory);