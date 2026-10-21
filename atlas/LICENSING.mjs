export const CODE_COPYRIGHT = 'Copyright (c) 2026 Anko-romochi and JYI Atlas contributors';
export const CODE_LICENSE = 'MIT';
export const MIT_LICENSE_TEXT = `MIT License

${CODE_COPYRIGHT}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
export const THIRD_PARTY_NOTICES = `JYI Atlas licensing boundaries

New JYI Atlas code: MIT, as scoped by LICENSE-SCOPE.json. Preserve its copyright
notice and license text when copying or distributing the licensed software.

Existing JYI original metadata and short descriptions: their existing CC0 1.0
terms remain unchanged. The existing corpus validator retains its existing MIT
notice. The upstream LICENSE is preserved separately in source/release packages.

The new MIT permission does not apply to third-party publications, images,
databases, their original descriptions, private assets, or other Studio Anko
products. Links and rights_note records are not redistribution permission.
No external image or full-text payload is bundled. Credit referenced material
according to the originating provider's terms and retain source URLs/locators.

A production card is data and user creative notes, not a transfer of third-party
rights. The tool's MIT license does not automatically relicense those notes or
the linked material. Publication approval of a release is a separate gate.
`;
export const EXPORT_LICENSE_SCOPE = {
 identifier: 'MIT', copyright: CODE_COPYRIGHT,
 applies_to: 'New JYI Atlas tool source code and corresponding tests only',
 export_context: 'This production-card bundle contains data and notes, not the tool implementation',
 data_terms: 'Existing JYI terms unchanged; no new MIT grant for card data or creative notes',
 third_party_and_private_permission_extended: false,
 source_scope_file: 'The tool source/release contains its exact code path list in LICENSE-SCOPE.json'
};
