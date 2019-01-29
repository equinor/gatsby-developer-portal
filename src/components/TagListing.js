import {Link} from "gatsby";
import React from "react";
import kebabCase from "lodash/kebabCase";

export default ({tags}) => {
    return (<ul>
            {tags.map(tag => (
                <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                    </Link>
                </li>
            ))}
        </ul>
    )
}
