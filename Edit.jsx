const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const globalSession = this.props.fashion00
        return (
            <DefaultLayout title="Edit">
                <h1>{globalSession.name.toUpperCase()} Edit Page</h1>
                <form action={`/global/${global._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={fruit.name} />
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={fashion.color}/>
                    <label htmlFor="readyToWear">Ready to Wear:</label>
                    <input type="checkbox" id="readyToWear" name="readyToWear" defaultChecked={globalfashion.readyToWear}/>
                    <input type="submit" value="Edit Global"/>
                </form>
            </DefaultLayout>
        )
    }
}