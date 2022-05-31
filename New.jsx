const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New">
                <h1>Create Global Virtual Fashion Show Page</h1>
                <form action="/global" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/>
                    <label htmlFor="readyToWear">Ready to wear:</label>
                    <input type="checkbox" id="readyToWear" name="readyToWear"/>
                    <input type="submit" value="Create Fashion"/>
                </form>
            </DefaultLayout>
        )
    }
}