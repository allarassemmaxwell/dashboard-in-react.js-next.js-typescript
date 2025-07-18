'use client';

import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

import data from '@/data/analytics';

const AnalyticsChart = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Analytics for this year</CardTitle>
                    <CardDescription>
                        Views per month
                    </CardDescription>
                    <CardContent>
                        <div style={{width: '100%', height: '300'}}>
                            <ResponsiveContainer>
                                <LineChart width={1100} height={300} data={data}>
                                    <Line type='monotone' dataKey='uv' stroke="#8884d8" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                                    <XAxis dataKey='name' />
                                    <YAxis />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </>
    );
}
 
export default AnalyticsChart;
