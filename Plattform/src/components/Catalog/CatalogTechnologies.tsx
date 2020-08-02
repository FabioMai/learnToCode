import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Chip,
    Grid,
    Typography,
} from '@material-ui/core'
import { CalendarToday } from '@material-ui/icons'
import { Link } from 'gatsby'
import React from 'react'

import PageLayout from '../Layout/PageLayout'

const CatalogTechnologies = props => {
    const nodes = props.pathContext.nodes

    return (
        <PageLayout>
            <Grid container spacing={4}>
                {nodes.map(
                    node =>
                        props.path === '/' + node.parent.relativeDirectory && (
                            <Grid item xs={12} md={6} xl={4} key={node.id}>
                                <Card raised>
                                    <CardHeader
                                        title={node.frontmatter.title + '\nHi I am technology'}
                                    />
                                    <CardContent>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <Chip
                                                    size="small"
                                                    icon={<CalendarToday />}
                                                    color="secondary"
                                                    label={node.frontmatter.date}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography>
                                                    {node.frontmatter.shortDescription}
                                                </Typography>
                                                <Typography>
                                                    Lektionen: {node.frontmatter.lectures}
                                                </Typography>
                                                <Typography>
                                                    {node.parent.relativeDirectory}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>

                                    <CardActions style={{ justifyContent: 'flex-end' }}>
                                        <Link
                                            style={{ marginRight: '1rem' }}
                                            to={
                                                props.path === '/'
                                                    ? props.path + node.frontmatter.title
                                                    : props.path + '/' + node.frontmatter.title
                                            }>
                                            Auf gehts!
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                )}
            </Grid>
        </PageLayout>
    )
}

export default CatalogTechnologies
