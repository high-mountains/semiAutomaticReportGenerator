import React from 'react';

const TableHeader = () => {
    return (
        <tr>
            <th>カテゴリー</th>
            <th>遺伝子</th>
            <th>変異の大きさ</th>
            <th>摂取すべきもの</th>
            <th>避けるべきもの</th>
        </tr>
    );
};

export default TableHeader;