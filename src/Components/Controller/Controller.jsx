import React from 'react';
import Search from './Search';
import {Row , Col} from 'reactstrap';
import FilterController from './FilterController';
import ViewController from './ViewController';
import BulkController from './BulkController';

const Controller = ({term , toggleSearch , toggleForm , handleFilter , view , changeView , clearSelected , clearCompleted , reset}) => {
    return (
        <div>
            <Search 
                term = {term}
                toggleSearch = {toggleSearch}
                toggleForm = {toggleForm}
            />

            <Row className='my-4'>
                <Col md={{size : 4}}>
                    <FilterController handleFilter= {handleFilter} />
                </Col>
                <Col md={{size : 4}}>
                    <ViewController view={view} changeView = { changeView} />
                </Col>
                <Col md={{size : 4}}>
                    <BulkController 
                        clearSelected = {clearSelected}
                        clearCompleted = { clearCompleted }
                        reset = { reset }
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Controller;