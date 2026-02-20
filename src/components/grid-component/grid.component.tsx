import type { GridComponentProps } from "./grid.component.props";
import Grid from '@mui/material/Grid';
import { West, East, North, South } from "@mui/icons-material";
import './grid.component.css';

const gridSize: number = 5;

function GridComponent(props: GridComponentProps) {
    return (
        <>
            {Array.from({ length: gridSize }, (_, rowIndex) => (
                <Grid key={rowIndex} container spacing={2}>
                    {Array.from({ length: gridSize }, (_, colIndex) => (
                        <Grid key={colIndex} size={{ xs: 1, md: 2 }}>
                            <div style={{ border: '1px solid blue', margin: '0', padding: '0', height: '60px', width: '60px' }}>
                                {props.iconDirection === 'EAST' && 
                                    props.iconXPosition == gridSize - (rowIndex + 1) && 
                                    props.iconYPosition == colIndex && 
                                    <West className="icon" />
                                }
                                
                                {props.iconDirection === 'WEST' && 
                                    props.iconXPosition == gridSize - (rowIndex + 1) && 
                                    props.iconYPosition == colIndex && 
                                    <East className="icon" />
                                }
                                
                                {props.iconDirection === 'NORTH' && 
                                    props.iconXPosition == gridSize - (rowIndex + 1) && 
                                    props.iconYPosition == colIndex && 
                                    <North className="icon" />
                                }
                                
                                {props.iconDirection === 'SOUTH' && 
                                    props.iconXPosition == gridSize - (rowIndex + 1) && 
                                    props.iconYPosition == colIndex && 
                                    <South className="icon" />
                                }
                            </div>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </>
    )
}

export default GridComponent;