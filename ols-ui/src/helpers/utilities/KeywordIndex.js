// @flow

/**
 * Adapted from I3.KeywordIndex that is part of the i3 Framework.
 *
 *   https://github.com/i3-framework/i3
 *
 * Copyright / License:
 *
 *   Copyright 2009 Mission Aviation Fellowship
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

type IndexEntry = [ string, Set<any> ];
type KeywordMap = Map<string, Set<any>>;

/**
 * Maintains an optimized index of keywords and associated identifiers.
 *
 * An identifier can be a number (e.g. an index into an array that is
 * being maintained somewhere), a string, or even a reference to an
 * object -- whatever will be a useful result when a search is made.
 * The {@link KeywordIndex#search} method will return an array of all
 * identifiers that have been associated with a given keyword.
 */
export default class KeywordIndex
{
  _newKeywords: KeywordMap;
  _index: Array<IndexEntry>;

  /**
   * Constructor for {@link KeywordIndex}.
   */
  constructor()
  {
    // Keywords that have not been optimized into _index.
    this._newKeywords = new Map();
    // Sorted array of keywords and associated identifiers.
    this._index = [];
  }

  /**
   * Adds a keyword and its identifier to the index.  A keyword can be
   * associated with multiple identifiers by calling this method repeatedly
   * for each identifier.
   *
   * @param {string} keyword The string to be associated with the identifier.
   * @param {any} identifier The number, string, or object to be returned as
   *                         a result when a search matches the keyword
   */
  associateKeywordWithIdentifier(keyword: string, identifier: any): void
  {
    // If we don't have any new keywords, initialize storage for it.
    // Downcase the keyword to ensure case is never an issue.
    keyword = keyword.toLowerCase();
    const keywordSet = this._newKeywords.get(keyword) || new Set();
    keywordSet.add(identifier);
    this._newKeywords.set(keyword, keywordSet);
  }

  /**
   * Builds the optimized index for searching.  This is automatically
   * called when the first search is made, but can be manually called
   * to pre-cache the optimized index so that the first search is faster.
   */
  prepareForSearch()
  {
    let keyword: string, identifiers: Set<any>;
    // If there is any existing search data, merge it in so we're current.
    let keywordSet;
    if (this._index.length > 0) {
      this._index.forEach((result) => {
        keyword = result[0];
        identifiers = result[1];
        // Grab the set of identifiers for this keyword.
        keywordSet = this._newKeywords.get(keyword);
        // If there is no existing set, then simply assign this one to it.
        if (keywordSet === undefined) {
          keywordSet = identifiers;
        }
        else {
          // Otherwise, loop over this set and add its members to the existing set.
          identifiers.forEach((identifier) => {
            // Cast `keywordSet into a non-maybe type since we know for sure
            // we have a valid set stored at this point.
            ((keywordSet: any): Set<any>).add(identifier);
          });
        }
        this._newKeywords.set(keyword, keywordSet);
      });
    }

    // Create the array of keywords.
    this._index = [];
    this._newKeywords.forEach((value, key) => {
      this._index.push([ key, value ]);
    });

    // Sort the array by keyword.
    this._index.sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    });

    // Reset the _newKeywords variable.
    this._newKeywords = new Map();
  }

  /**
   * Searches the index for keywords that start with the given string.
   * The search is case-insensitive.
   *
   * @param {string} term The term to search for.
   * @returns {Set<any>} The set of identifiers that are associated with the
   *                     supplied term.
   */
  search(term: string): Set<any>
  {
    // Make sure that all keywords have been optimized.
    if (this._newKeywords.size > 0) this.prepareForSearch();

    // Downcase the search term so that it will match with our index.
    term = term.toLowerCase();
    const termLength = term.length; // Cache this to avoid re-computing.
    const range = [];               // Start and end indicies of keyword matches.
    let high, low, probe;           // Used in the binary search.

    // Perform a binary search through the index for the first matching keyword.
    // The index of the first match will become the first item in the range.
    high = this._index.length;
    low = -1;
    while (high - low > 1) {
      probe = Math.floor((high + low) / 2);
      if (this._index[probe][0].substr(0, termLength) < term) {
        low = probe;
      }
      else {
        high = probe;
      }
    }
    range[0] = low + 1;

    // Perform a binary search through the index for the last matching keyword.
    // The index of the last match will become the second item in the range.
    high = this._index.length;
    low = -1;
    while (high - low > 1) {
      probe = Math.floor((high + low) / 2);
      if (this._index[probe][0].substr(0, termLength) > term) {
        high = probe;
      }
      else {
        low = probe;
      }
    }
    range[1] = high - 1;

    // Create a hash of all identifiers that have been mapped to keywords in the
    // range of matches. This removes multiple instances of the same identifier.
    const matches: Set<any> = new Set();
    for (let i = range[0]; i <= range[1]; i++) {
      this._index[i][1].forEach((match) => {
        matches.add(match);
      });
    }

    return matches;
  }
}
