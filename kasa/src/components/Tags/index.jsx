import { component } from 'react';
import '../Tags/Tags.css';

class Tags extends component {
    render() {
        const { tags } = this.props;
        return tags.map((tag) => <span className="tag">{tag}</span>);
    }
}

export default Tags;