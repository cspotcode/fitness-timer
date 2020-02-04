import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Component } from 'react';

export class State {
    @observable reps: number = 0;
    @observable totalReps: number = 0;
}

export interface UiProps {
    state: State;
}

@observer
export class Ui extends Component<UiProps> {
    render() {
        const {state} = this.props;
        return <>
            <div>
                <span>Preset name:</span><span></span>
                <div>
                    <span>Time:</span><span><input type="number" /></span>
                </div>
                <div>
                    <span>Rest Time:</span><span><input type="number" /></span>
                </div>
                <div>
                    <span>Reps:</span><span><input type="number" /></span>
                </div>
                <div>
                    <span>Sets:</span><span><input type="number" /></span>
                </div>
                <div>
                    <span>Rest Time Between Sets</span><span><input type="number" min="1" /></span>
                </div>
                <div>
                    <button>Start</button>
                    <button>Pause</button>
                </div>
                <div>
                    Reps: Timed, Full Manual, Manual Start
                    Sets: Auto, Full Manual, Manual Start
                </div>
                <div>
                    Presets
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Load button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name of preset</td>
                                <td><button>Load</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>;
    }
}
