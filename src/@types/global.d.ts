/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as Olm from "olm";

export {};

declare global {
    namespace NodeJS {
        interface Global {
            localStorage: Storage;
            Olm: Olm;
        }
    }
    interface Global {
        Olm: Olm;
    }

    interface MediaDevices {
        // This is experimental and types don't know about it yet
        // https://github.com/microsoft/TypeScript/issues/33232
        getDisplayMedia(constraints: MediaStreamConstraints): Promise<MediaStream>;
    }

    interface HTMLAudioElement {
        // setSinkId is experimental and typescript doesn't know about it
        setSinkId(outputId: string);
    }

    interface DummyInterfaceWeShouldntBeUsingThis {}

    interface Navigator {
        // We check for the webkit-prefixed getUserMedia to detect if we're
        // on webkit: we should check if we still need to do this
        webkitGetUserMedia: DummyInterfaceWeShouldntBeUsingThis;
    }
}
