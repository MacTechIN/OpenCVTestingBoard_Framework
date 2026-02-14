# Function Verification Report
Generated on: 2026-02-14T12:25:59.872Z
Total Functions Checked: 239

| Function ID | Status | Issues |
|---|---|---|
| **cvtColor_GRAY** | 🟢 Pass | OK |
| **cvtColor_HSV** | 🟢 Pass | OK |
| **cvtColor_LAB** | 🟢 Pass | OK |
| **cvtColor_YCrCb** | 🟢 Pass | OK |
| **cvtColor_YUV** | 🟢 Pass | OK |
| **cvtColor_XYZ** | 🟢 Pass | OK |
| **cvtColor_HLS** | 🟢 Pass | OK |
| **cvtColor_Luv** | 🟢 Pass | OK |
| **cvtColor_BGRA2BGR** | 🟢 Pass | OK |
| **cvtColor_BGR2BGRA** | 🟢 Pass | OK |
| **cvtColor_BGR2RGB** | 🟢 Pass | OK |
| **cvtColor_GRAY2BGR** | 🟢 Pass | OK |
| **cvtColor_HSV2BGR** | 🟢 Pass | OK |
| **cvtColor_LAB2BGR** | 🟢 Pass | OK |
| **cvtColor_YCrCb2BGR** | 🟢 Pass | OK |
| **cvtColor_YUV2BGR** | 🟢 Pass | OK |
| **cvtColor_XYZ2BGR** | 🟢 Pass | OK |
| **cvtColor_HLS2BGR** | 🟢 Pass | OK |
| **cvtColor_Luv2BGR** | 🟢 Pass | OK |
| **demosaicing** | 🟢 Pass | OK |
| **applyColorMap_AUTUMN** | 🟢 Pass | OK |
| **applyColorMap_BONE** | 🟢 Pass | OK |
| **applyColorMap_JET** | 🟢 Pass | OK |
| **applyColorMap_WINTER** | 🟢 Pass | OK |
| **applyColorMap_RAINBOW** | 🟢 Pass | OK |
| **applyColorMap_OCEAN** | 🟢 Pass | OK |
| **applyColorMap_SUMMER** | 🟢 Pass | OK |
| **applyColorMap_SPRING** | 🟢 Pass | OK |
| **applyColorMap_COOL** | 🟢 Pass | OK |
| **applyColorMap_HSV** | 🟢 Pass | OK |
| **applyColorMap_PINK** | 🟢 Pass | OK |
| **applyColorMap_HOT** | 🟢 Pass | OK |
| **applyColorMap_PARULA** | 🟢 Pass | OK |
| **applyColorMap_MAGMA** | 🟢 Pass | OK |
| **applyColorMap_INFERNO** | 🟢 Pass | OK |
| **applyColorMap_PLASMA** | 🟢 Pass | OK |
| **applyColorMap_VIRIDIS** | 🟢 Pass | OK |
| **applyColorMap_CIVIDIS** | 🟢 Pass | OK |
| **applyColorMap_TWILIGHT** | 🟢 Pass | OK |
| **applyColorMap_TWILIGHT_SHIFTED** | 🟢 Pass | OK |
| **applyColorMap_TURBO** | 🟢 Pass | OK |
| **applyColorMap_DEEPGREEN** | 🟢 Pass | OK |
| **blur** | 🟢 Pass | OK |
| **GaussianBlur** | 🟢 Pass | OK |
| **medianBlur** | 🟢 Pass | OK |
| **bilateralFilter** | 🟢 Pass | OK |
| **erode** | 🟢 Pass | OK |
| **dilate** | 🟢 Pass | OK |
| **morphologyEx_OPEN** | 🟢 Pass | OK |
| **morphologyEx_CLOSE** | 🟢 Pass | OK |
| **Canny** | 🟢 Pass | OK |
| **Sobel** | 🟢 Pass | OK |
| **Laplacian** | 🟢 Pass | OK |
| **threshold_BINARY** | 🟢 Pass | OK |
| **threshold_OTSU** | 🟢 Pass | OK |
| **adaptiveThreshold** | 🟢 Pass | OK |
| **resize** | 🟢 Pass | OK |
| **rotate_90** | 🟢 Pass | OK |
| **rotate_180** | 🟢 Pass | OK |
| **flip_horizontal** | 🟢 Pass | OK |
| **flip_vertical** | 🟢 Pass | OK |
| **findContours** | 🟢 Pass | OK |
| **approxPolyDP** | 🟢 Pass | OK |
| **arcLength** | 🟢 Pass | OK |
| **boundingRect** | 🟢 Pass | OK |
| **contourArea** | 🔴 NG | Unused param: oriented |
| **convexHull** | 🔴 NG | Unused param: clockwise |
| **convexityDefects** | 🟢 Pass | OK |
| **fitEllipse** | 🟢 Pass | OK |
| **fitLine** | 🟢 Pass | OK |
| **isContourConvex** | 🟢 Pass | OK |
| **minAreaRect** | 🟢 Pass | OK |
| **minEnclosingCircle** | 🟢 Pass | OK |
| **minEnclosingTriangle** | 🟢 Pass | OK |
| **matchShapes** | 🟢 Pass | OK |
| **moments** | 🟢 Pass | OK |
| **pointPolygonTest** | 🟢 Pass | OK |
| **rotatedRectangleIntersection** | 🔴 NG | Unused param: angle1, Unused param: angle2 |
| **cornerHarris** | 🟢 Pass | OK |
| **goodFeaturesToTrack** | 🟢 Pass | OK |
| **HoughLines** | 🟢 Pass | OK |
| **HoughLinesP** | 🟢 Pass | OK |
| **HoughCircles** | 🟢 Pass | OK |
| **cornerSubPix** | 🟢 Pass | OK |
| **cornerMinEigenVal** | 🟢 Pass | OK |
| **cornerEigenValsAndVecs** | 🟢 Pass | OK |
| **preCornerDetect** | 🟢 Pass | OK |
| **split** | 🟢 Pass | OK |
| **merge** | 🟢 Pass | OK |
| **inRange** | 🟢 Pass | OK |
| **bitwise_not** | 🟢 Pass | OK |
| **normalize** | 🟢 Pass | OK |
| **equalizeHist** | 🟢 Pass | OK |
| **calcHist** | 🔴 NG | Missing src2 usage |
| **CLAHE** | 🟢 Pass | OK |
| **calcBackProject** | 🟢 Pass | OK |
| **compareHist_CORREL** | 🔴 NG | Unused param: splitRatio, No output to dst |
| **compareHist_CHISQR** | 🔴 NG | Unused param: splitRatio, No output to dst |
| **compareHist_INTERSECT** | 🔴 NG | Unused param: splitRatio, No output to dst |
| **compareHist_BHATTACHARYYA** | 🔴 NG | Unused param: splitRatio, No output to dst |
| **compareHist_HELLINGER** | 🔴 NG | Unused param: splitRatio, No output to dst |
| **compareHist_CHISQR_ALT** | 🔴 NG | Unused param: splitRatio, No output to dst |
| **compareHist_KL_DIV** | 🟢 Pass | OK |
| **rectangle** | 🟢 Pass | OK |
| **circle** | 🟢 Pass | OK |
| **line** | 🟢 Pass | OK |
| **putText** | 🟢 Pass | OK |
| **ellipse** | 🟢 Pass | OK |
| **arrowedLine** | 🟢 Pass | OK |
| **drawMarker** | 🟢 Pass | OK |
| **polylines** | 🟢 Pass | OK |
| **fillPoly** | 🟢 Pass | OK |
| **fillConvexPoly** | 🟢 Pass | OK |
| **drawContours** | 🟢 Pass | OK |
| **ellipse2** | 🟢 Pass | OK |
| **clipLine** | 🟢 Pass | OK |
| **getFontScaleFromHeight** | 🟢 Pass | OK |
| **getTextSize** | 🟢 Pass | OK |
| **add** | 🟢 Pass | OK |
| **subtract** | 🟢 Pass | OK |
| **multiply** | 🟢 Pass | OK |
| **addWeighted** | 🟢 Pass | OK |
| **bitwise_and** | 🔴 NG | Missing src2 usage |
| **bitwise_or** | 🔴 NG | Missing src2 usage |
| **bitwise_xor** | 🔴 NG | Missing src2 usage |
| **transpose** | 🟢 Pass | OK |
| **repeat** | 🟢 Pass | OK |
| **hconcat** | 🟢 Pass | OK |
| **vconcat** | 🟢 Pass | OK |
| **convertScaleAbs** | 🟢 Pass | OK |
| **absdiff** | 🟢 Pass | OK |
| **magnitude** | 🟢 Pass | OK |
| **phase** | 🟢 Pass | OK |
| **mean** | 🔴 NG | Missing src2 usage |
| **meanStdDev** | 🔴 NG | Missing src2 usage |
| **minMaxLoc** | 🔴 NG | Missing src2 usage |
| **countNonZero** | 🟢 Pass | OK |
| **reduce** | 🟢 Pass | OK |
| **sum** | 🟢 Pass | OK |
| **norm** | 🔴 NG | Missing src2 usage |
| **compare** | 🔴 NG | Missing src2 usage |
| **min** | 🟢 Pass | OK |
| **max** | 🟢 Pass | OK |
| **checkRange** | 🟢 Pass | OK |
| **boxFilter** | 🟢 Pass | OK |
| **sqrBoxFilter** | 🟢 Pass | OK |
| **filter2D** | 🟢 Pass | OK |
| **sepFilter2D** | 🟢 Pass | OK |
| **Scharr** | 🟢 Pass | OK |
| **spatialGradient** | 🟢 Pass | OK |
| **pyrDown** | 🟢 Pass | OK |
| **pyrUp** | 🟢 Pass | OK |
| **pyrMeanShiftFiltering** | 🟢 Pass | OK |
| **buildPyramid** | 🟢 Pass | OK |
| **getDerivKernels** | 🟢 Pass | OK |
| **getGaborKernel** | 🟢 Pass | OK |
| **getGaussianKernel** | 🟢 Pass | OK |
| **distanceTransform** | 🔴 NG | Missing src2 usage |
| **floodFill** | 🔴 NG | Missing src2 usage |
| **watershed** | 🟢 Pass | OK |
| **connectedComponents** | 🟢 Pass | OK |
| **accumulate** | 🟢 Pass | OK |
| **accumulateSquare** | 🟢 Pass | OK |
| **accumulateProduct** | 🟢 Pass | OK |
| **accumulateWeighted** | 🟢 Pass | OK |
| **createHanningWindow** | 🟢 Pass | OK |
| **phaseCorrelate** | 🟢 Pass | OK |
| **meanShift** | 🔴 NG | Unused param: maxIter, Unused param: epsilon, No output to dst |
| **CamShift** | 🟢 Pass | OK |
| **calcOpticalFlowPyrLK** | 🟢 Pass | OK |
| **calcOpticalFlowFarneback** | 🟢 Pass | OK |
| **buildOpticalFlowPyramid** | 🟢 Pass | OK |
| **estimateAffine2D** | 🔴 NG | Unused param: method, No output to dst |
| **estimateAffinePartial2D** | 🟢 Pass | OK |
| **findTransformECC** | 🟢 Pass | OK |
| **readOpticalFlow** | 🔴 NG | Unused param: format, No output to dst |
| **writeOpticalFlow** | 🟢 Pass | OK |
| **calcOpticalFlowSF** | 🔴 NG | Unused param: maxFlow |
| **trackerMIL** | 🔴 NG | Unused param: x, Unused param: y, Unused param: width, Unused param: height, No output to dst |
| **trackerKCF** | 🔴 NG | Unused param: x, Unused param: y, Unused param: width, Unused param: height, Unused param: detect_thresh, No output to dst |
| **trackerCSRT** | 🔴 NG | Unused param: x, Unused param: y, Unused param: width, Unused param: height, Unused param: use_hog, No output to dst |
| **trackerMedianFlow** | 🔴 NG | Unused param: x, Unused param: y, Unused param: width, Unused param: height, Unused param: pointsInGrid, No output to dst |
| **trackerMOSSE** | 🔴 NG | Unused param: x, Unused param: y, Unused param: width, Unused param: height, No output to dst |
| **trackerBoosting** | 🔴 NG | Unused param: x, Unused param: y, Unused param: width, Unused param: height, Unused param: numClassifiers, No output to dst |
| **trackerGOTURN** | 🔴 NG | Unused param: x, Unused param: y, Unused param: width, Unused param: height, No output to dst |
| **trackerTLD** | 🟢 Pass | OK |
| **createBackgroundSubtractorMOG2** | 🟢 Pass | OK |
| **createBackgroundSubtractorKNN** | 🟢 Pass | OK |
| **multiTracker** | 🟢 Pass | OK |
| **namedWindow** | 🔴 NG | Unused param: windowName, No output to dst |
| **destroyWindow** | 🔴 NG | Unused param: windowName, No output to dst |
| **destroyAllWindows** | 🔴 NG | No output to dst |
| **resizeWindow** | 🔴 NG | Unused param: windowName, No output to dst |
| **moveWindow** | 🔴 NG | Unused param: windowName, No output to dst |
| **setWindowTitle** | 🔴 NG | Unused param: windowName, No output to dst |
| **getWindowProperty** | 🔴 NG | Unused param: windowName, No output to dst |
| **setWindowProperty** | 🔴 NG | Unused param: windowName, No output to dst |
| **waitKey** | 🔴 NG | Unused param: delay, No output to dst |
| **pollKey** | 🟢 Pass | OK |
| **createTrackbar** | 🔴 NG | Unused param: trackbarName, No output to dst |
| **getTrackbarPos** | 🔴 NG | Unused param: trackbarName, No output to dst |
| **setTrackbarPos** | 🔴 NG | Unused param: trackbarName, No output to dst |
| **setTrackbarMin** | 🔴 NG | Unused param: trackbarName, No output to dst |
| **setTrackbarMax** | 🟢 Pass | OK |
| **selectROI** | 🔴 NG | Unused param: windowName, No output to dst |
| **selectROIs** | 🔴 NG | Unused param: windowName |
| **setMouseCallback** | 🔴 NG | Unused param: windowName, No output to dst |
| **getMouseWheelDelta** | 🔴 NG | Unused param: flags |
| **startWindowThread** | 🟢 Pass | OK |
| **imshow** | 🟢 Pass | OK |
| **findChessboardCorners** | 🔴 NG | Unused param: patternWidth, Unused param: patternHeight, Unused param: flags, No output to dst |
| **drawChessboardCorners** | 🔴 NG | Unused param: patternWidth, Unused param: patternHeight, No output to dst |
| **findCirclesGrid** | 🔴 NG | Unused param: patternWidth, Unused param: patternHeight, Unused param: flags, No output to dst |
| **calibrateCamera** | 🔴 NG | Unused param: squareSize, Unused param: flags, No output to dst |
| **undistort** | 🔴 NG | Unused param: k1, Unused param: k2, Unused param: p1, Unused param: p2, No output to dst |
| **getOptimalNewCameraMatrix** | 🔴 NG | Unused param: alpha, No output to dst |
| **initUndistortRectifyMap** | 🔴 NG | Unused param: mapType, No output to dst |
| **findHomography** | 🔴 NG | Unused param: method, No output to dst |
| **perspectiveTransform** | 🔴 NG | Unused param: scaleX, Unused param: scaleY, No output to dst |
| **decomposeHomographyMat** | 🔴 NG | No output to dst |
| **stereoCalibrate** | 🔴 NG | Unused param: flags, No output to dst |
| **stereoRectify** | 🔴 NG | Unused param: alpha, No output to dst |
| **StereoBM_compute** | 🔴 NG | Unused param: numDisparities, Unused param: blockSize, Unused param: preFilterCap, Unused param: uniquenessRatio, No output to dst |
| **StereoSGBM_compute** | 🔴 NG | Unused param: minDisparity, Unused param: numDisparities, Unused param: blockSize, Unused param: P1, Unused param: P2, Unused param: mode, No output to dst |
| **reprojectImageTo3D** | 🔴 NG | Unused param: handleMissingValues, No output to dst |
| **triangulatePoints** | 🔴 NG | No output to dst |
| **correctMatches** | 🔴 NG | No output to dst |
| **convertPointsToHomogeneous** | 🔴 NG | No output to dst |
| **convertPointsFromHomogeneous** | 🔴 NG | No output to dst |
| **solvePnP** | 🔴 NG | Unused param: method, No output to dst |
| **solvePnPRansac** | 🔴 NG | Unused param: iterationsCount, Unused param: reprojectionError, Unused param: confidence, No output to dst |
| **solvePnPRefineLM** | 🔴 NG | No output to dst |
| **Rodrigues** | 🔴 NG | No output to dst |
| **projectPoints** | 🔴 NG | No output to dst |
| **drawFrameAxes** | 🔴 NG | Unused param: length, Unused param: thickness, No output to dst |
| **decomposeProjectionMatrix** | 🔴 NG | No output to dst |
| **composeRT** | 🔴 NG | No output to dst |
| **computeCorrespondEpilines** | 🔴 NG | Unused param: whichImage, No output to dst |
| **validateDisparity** | 🔴 NG | Unused param: numberOfDisparities |
